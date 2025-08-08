import axios from "axios";
import React, { useEffect, useState } from "react";
import "./orders.scss";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/orders/");
      console.log(res.data.orders)
      setOrders(res.data.orders);
    } catch (error) {
      console.log(error.message);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
<div className="ordersContainer">
      {orders.map((order, i) => (
        <div className="orderCard" key={i}>
          <div className="statusBar"></div>

          <div className="orderContent">
            {/* Left Side */}
            <div className="customerInfo">
              <h3>{order.fullName}</h3>
              <p><strong>Email:</strong> {order.email}</p>
              <p><strong>City:</strong> {order.city}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Phone:</strong> {order.phoneNumber}</p>
            </div>

            {/* Right Side */}
            <div className="orderInfo">
              <p><strong>Price:</strong> PKR {order.totalPrice}/-</p>
              <p><strong>Orders:</strong> {order.totalItems}</p>
              <p><strong>Date:</strong> {formatDate(order.createdAt)}</p>
              <button className="delete">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
