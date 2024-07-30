import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  IconButton,
  Grid,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { FaAmazonPay } from "react-icons/fa";
import axios from "axios";

const AllOrder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editedOrder, setEditedOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderData, setOrderData] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");


  // Fetch Orders or retrieve functionality of orders

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage("");
        window.location.reload();
      }, 2000); 
    }
  }, [successMessage]);

  const fetchOrders = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
      setError("No token found");
      setIsLoading(false);
      return;
    }
    try {
      const response = await axios({
        method: "GET",
        url: "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/retrieve",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Fetched Orders:", response.data);
      setOrderData(response.data.data || []);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch stock data");
    } finally {
      setIsLoading(false);
    }
  };

  // Delete functionality for Orders

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authorization token not found");
      }

      const response = await axios.delete(
        `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Order deleted successfully");
        setOrderData((prevOrders) =>
          prevOrders.filter((order) => order._id !== id)
        );
      } else {
        console.error("Error deleting order:", response.data);
        setError(
          "An error occurred while deleting the order. Please try again."
        );
      }
    } catch (error) {
      console.error("Error deleting order:", error);
      setError(error.message);
    }
  };


    // Update functionality for Orders

  const handleEdit = (id) => {
      setEditingOrderId(id);
      const order = orderData.find((order) => order._id === id);
      setEditedOrder(order);
  };

  const handleSaveEdit = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const updates = {
        selectedStockItems: editedOrder.selectedStockItems.map((item) => ({
          NameOfProduct: item.NameOfProduct,
          typeOfProduct: item.typeOfProduct,
          quantity: item.quantity,
        })),
        phoneNumber: editedOrder.phoneNumber,
        shippingAddress: editedOrder.shippingAddress,
      };

      const response = await axios(
        `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/update/${editingOrderId}`,

        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: JSON.stringify(updates),
        }
      );
      if (response.status === 200) {
        setSuccessMessage("Order updated successfully");
      } else {
        const errorMessage = await response.text();
        console.error("Failed to update profile:", errorMessage);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditOrderData = (field, value) => {
    if (field === "quantity") {
      setEditedOrder((prevEditedOrder) => ({
        ...prevEditedOrder,
        selectedStockItems: prevEditedOrder.selectedStockItems.map(
          (item, index) => (index === 0 ? { ...item, quantity: value } : item)
        ),
      }));
    } else {
      setEditedOrder((prevEditedOrder) => ({
        ...prevEditedOrder,
        [field]: value,
      }));
    }
  };
  
  // Payment functionality for Orders

  const handlePayment = async () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    if (!token) {
      throw new Error("Authorization token not found");
    }
    try {
      const response = await axios.get(
        "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/pay/momo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Payment initiated:");

      console.log("Payment initiated:", response.data.data.data.link);
      if (response.status == 200) {
        window.location.href = `${response.data.data.data.link}`;
      }
      // Redirect to payment link if needed
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };
  
  // Filter orders based on product name, type or shipping address on search query

 const filteredOrders = Array.isArray(orderData)
   ? orderData.filter(
       (order) =>
         // Filter by product name
         (order.selectedStockItems &&
           order.selectedStockItems.some((item) =>
             item.NameOfProduct.toLowerCase().includes(
               searchQuery.toLowerCase()
             )
           )) ||
         // Filter by type of the product 
         (order.selectedStockItems &&
           order.selectedStockItems.some((item) =>
             item.typeOfProduct
               .toLowerCase()
               .includes(searchQuery.toLowerCase())
           )) ||
         // Filter by shipping address
         order.shippingAddress.toLowerCase().includes(searchQuery.toLowerCase())
     )
   : [];

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
        paddingLeft: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
          width: "60%",
        }}
      >
        <TextField
          label="Search Orders"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
          style={{ width: 300 }}
        />
      </div>
      <div className="text-xl mb-2 mt-2">
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      </div>
      <Grid container spacing={2}>
        {filteredOrders.map((order) => (
          <Grid item xs={12} sm={15} md={4} key={order._id}>
            <Card>
              <CardContent>
                {order.selectedStockItems &&
                  order.selectedStockItems.map((item, index) => (
                    <div key={index}>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Product Name:{" "}
                        <Box
                          component="span"
                          sx={{ fontWeight: "bold", color: "green" }}
                        >
                          {item.NameOfProduct}
                        </Box>
                      </Typography>
                      <Typography variant="body1">
                        Quality:{" "}
                        <Box
                          component="span"
                          sx={{ fontWeight: "bold", color: "green" }}
                        >
                          {item.typeOfProduct}
                        </Box>
                      </Typography>
                      <Typography variant="body1">
                        Quantity: {item.quantity} Ton
                      </Typography>
                    </div>
                  ))}
                <Typography variant="body1">
                  Phone Number: {order.phoneNumber}
                </Typography>
                <Typography variant="body1">
                  Shipping Address: {order.shippingAddress}
                </Typography>
                <Typography variant="body1">
                  Total Amount: {order.totalAmount}
                </Typography>
                <Typography variant="body1">Status: {order.status}</Typography>
                <Typography variant="body2">
                  Created At: {new Date(order.createdAt).toLocaleString()}
                </Typography>
                <div>
                  <IconButton onClick={handlePayment}>
                    <FaAmazonPay style={{ fontSize: "24px", color: "black" }} />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(order._id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(order._id)}>
                    <EditIcon color="primary" />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {editingOrderId && (
        <div style={{ marginTop: 16, marginBottom: 25 }}>
          <h3 className="text-2xl mb-3 font-medium text-green-600">
            Edit Order
          </h3>
          {editedOrder.selectedStockItems &&
            editedOrder.selectedStockItems.map((item, index) => (
              <TextField
                key={index}
                label={`Quantity for ${item.NameOfProduct}`}
                variant="outlined"
                value={item.quantity || ""}
                onChange={(e) =>
                  handleEditOrderData("quantity", e.target.value, index)
                }
                style={{ marginRight: 16, marginTop: 16 }}
              />
            ))}

          <TextField
            label="Phone Number"
            variant="outlined"
            value={editedOrder.phoneNumber || ""}
            onChange={(e) => handleEditOrderData("phoneNumber", e.target.value)}
            style={{ marginRight: 16, marginTop: 16 }}
          />
          <TextField
            label="Shipping Address"
            variant="outlined"
            value={editedOrder.shippingAddress || ""}
            onChange={(e) =>
              handleEditOrderData("shippingAddress", e.target.value)
            }
            style={{ marginRight: 16, marginTop: 16 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveEdit}
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 10,
              paddingTop: 10,
              marginTop: 18,
              backgroundColor: "green",
            }}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default AllOrder;
