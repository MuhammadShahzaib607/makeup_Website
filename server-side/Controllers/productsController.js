import asyncHandler from 'express-async-handler';
import { deleteFromCloudinary } from '../utils/cloudinary.js';
import { createError, createSuccess } from '../utils/responseHandlers.js';
import Products from '../Models/Products.js';
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

// Multer Memory Storage
const storage = multer.memoryStorage();
export const upload = multer({ storage });

// Cloudinary stream upload
const uploadToCloudinaryBuffer = (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

// CREATE PRODUCT
export const createProduct = asyncHandler(async (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    return next(createError(400, "Please upload at least one image."));
  }

  const images = [];
  for (const file of req.files) {
    try {
      const uploadedImage = await uploadToCloudinaryBuffer(file.buffer, "uploads");
      images.push({
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url
      });
    } catch (error) {
      return next(createError(500, "Image upload failed."));
    }
  }

  const { name, description, price, category, stock } = req.body;
  if (!name || !price || !category) {
    return next(createError(400, "Name, Price and Category are required."));
  }
  const parsedStock = parseInt(stock, 10);
  if (isNaN(parsedStock) || parsedStock < 0) {
    return next(createError(400, "Stock must be a non-negative number."));
  }

  const newProduct = new Products({
    name,
    description,
    price,
    category,
    images,
    user: req.user.id,
    stock: parsedStock
  });

  const savedProduct = await newProduct.save();
  let successRes = createSuccess(201, "Product created successfully");
  res.status(201).json({ successRes, data: savedProduct });
});

// UPDATE PRODUCT
export const updateProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(createError(400, "Product ID is required."));
  }
  const product = await Products.findById(id);
  if (!product) {
    return next(createError(404, "Product not found."));
  }
  if (product.user.toString() !== req.user.id) {
    return next(createError(403, "You are not authorized to update this product."));
  }

  const { name, description, price, category } = req.body;
  if (!name || !price || !category) {
    return next(createError(400, "Name, Price and Category are required."));
  }

  product.name = name;
  product.description = description;
  product.price = price;
  product.category = category;

  if (req.files && req.files.length > 0) {
    const images = [];
    for (const file of req.files) {
      try {
        const uploadedImage = await uploadToCloudinaryBuffer(file.buffer, "uploads");
        images.push({
          public_id: uploadedImage.public_id,
          url: uploadedImage.secure_url
        });
      } catch (error) {
        return next(createError(500, "Image upload failed."));
      }
    }
    product.images = images;
  }

  const updatedProduct = await product.save();
  let successRes = createSuccess(200, "Product updated successfully");
  res.status(200).json({ successRes, data: updatedProduct });
});

// GET PRODUCTS BY CATEGORY
export const getProducts = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const allProducts = await Products.find();
    const matchedProducts = allProducts.filter((product) => {
      const catId = typeof product.category === "object"
        ? product.category._id?.toString()
        : product.category?.toString();
      return catId === id;
    });

    if (matchedProducts.length === 0) {
      return res.status(200).json({
        success: false,
        message: "No product found in this Category",
        data: [],
      });
    }

    const successRes = createSuccess(200, "Products retrieved successfully");
    res.status(200).json({ successRes, data: matchedProducts });
  } catch (error) {
    next(error);
  }
});

// GET SINGLE PRODUCT
export const getProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(createError(400, "Product ID is required."));
  }

  const product = await Products.findById(id).populate('user', 'username email');
  if (!product) {
    return next(createError(404, "Product not found."));
  }

  let successRes = createSuccess(200, "Product retrieved successfully");
  res.status(200).json({ successRes, data: product });
});

// DELETE PRODUCT
export const deleteProduct = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return next(createError(400, "Product ID is required."));
    }

    const product = await Products.findById(id);
    if (!product) {
      return next(createError(404, "Product not found."));
    }

    if (product.user.toString() !== req.user.id) {
      return next(createError(403, "You are not authorized to delete this product."));
    }

    for (const image of product.images) {
      try {
        await deleteFromCloudinary(image.public_id);
      } catch (error) {
        return next(error);
      }
    }

    await Products.findByIdAndDelete(id);
    let successRes = createSuccess(200, "Product deleted successfully");
    res.status(200).json({ successRes, data: product });
  } catch (error) {
    next(error);
  }
});
