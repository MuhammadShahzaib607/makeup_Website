import express from "express";
import { getAllOrders, placeOrder } from "../Controllers/orderController.js";

const router = express.Router();

router.post("/", placeOrder);
router.get("/", getAllOrders);

export default router;
