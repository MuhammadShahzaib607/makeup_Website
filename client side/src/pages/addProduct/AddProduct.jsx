import React, { useRef } from 'react';
import './addProduct.scss';

const AddProduct = () => {
  const inputRef = useRef();

  return (
    <div className="addProduct">
      <h1>Add Your Product</h1>

      <div className="title">
        <div>Title</div>
        <input type="text" placeholder="Title" />
      </div>

      <div className="desc">
        <div>Description</div>
        <input type="text" placeholder="Description" />
      </div>

      <div className="price">
        <div>Price</div>
        <input type="text" placeholder="Price" />
      </div>

      <div className="category">
        <div>Category</div>
        <select>
          <option value="" disabled>Select a category</option>
          <option value="makeup">Makeup</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="others">Others</option>
        </select>
      </div>

      <div className="stock">
        <div>Stock Quantity</div>
        <input type="number" placeholder="Enter stock amount" />
      </div>

      <input type="file" ref={inputRef} style={{ display: 'none' }} />

      <div className="btns">
        <button className="uploadImg">Upload Image</button>
        <button className="add">Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
