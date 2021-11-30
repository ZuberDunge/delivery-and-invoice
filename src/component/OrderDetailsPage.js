import React, { useState, useContext, useEffect } from 'react'
import "./Style/Invoice.css"
import { useParams, useNavigate } from "react-router-dom";
import { ShippingDataContext } from './context/context';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from './navbar/Navbar';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function OrderDetailsPage() {
    const { shippingData, updateStatus } = useContext(ShippingDataContext);
    const { id } = useParams()
    let back = useNavigate();
    let OrderDeatil = shippingData.find(order => order.id === parseInt(id))
    let shippingCharges = 50;

    const [userDetails, setuserDetails] = useState({
        id: OrderDeatil.id,
        status: OrderDeatil.status,
        itemName: OrderDeatil.itemName,
        orderId: OrderDeatil.orderId,
        orderDate: OrderDeatil.orderDate,
        price: OrderDeatil.price,
        quantity: OrderDeatil.quantity,
        customerName: OrderDeatil.customerName,
        Address: OrderDeatil.Address,
        sellerName: OrderDeatil.sellerName,
        paymentMode: OrderDeatil.paymentMode
    });


    const handleChange = (e) => {
        console.log("clicked");
        setuserDetails({ ...userDetails, [e.target.name]: e.target.value })

    }
    useEffect(() => {
        const updatedStatus = userDetails
        updateStatus(parseInt(id), updatedStatus)
    })



    return (
        <><Navbar />
            <div className="invoice-container">
                <div className="flex">
                    <h3>Order Number : {OrderDeatil.orderId} </h3>
                    <h3>Order Date : {OrderDeatil.orderDate} </h3>
                </div>
                <div className="mark-delivered">
                    <div onClick={() => back("/")}  >
                        <i class="fas fa-arrow-circle-left"></i>
                    </div>
                    <div> Delivery Status :
                    </div>
                    <div className="dropdown">
                        <Box sx={{ minWidth: 160 }}>
                            <FormControl fullWidth>

                                <Select
                                    name="status"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={userDetails.status}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Delivered"}>Delivered</MenuItem>
                                    <MenuItem value={"In Transit"}>In - Transit</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ maxWidth: 1400, margin: "auto" }} aria-label="simple table">
                        <TableBody>
                            <TableRow >
                                <TableCell component="th" align="left">Order Id</TableCell>
                                <TableCell align="left">
                                    {OrderDeatil.orderId} </TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" align="left">Item Name</TableCell>
                                <TableCell align="left">
                                    {OrderDeatil.itemName}  </TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" align="left">Order Date</TableCell>
                                <TableCell align="left"> {OrderDeatil.orderDate}
                                </TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" align="left">customerName</TableCell>
                                <TableCell align="left">{OrderDeatil.customerName}
                                </TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" align="left">Seller Name</TableCell>
                                <TableCell align="left">{OrderDeatil.sellerName}
                                </TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" align="left">Price</TableCell>
                                <TableCell align="left">{OrderDeatil.price} ₹
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell component="th" align="left">Shipping Charges</TableCell>
                                <TableCell align="left">{shippingCharges} ₹
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell component="th" align="left">Total</TableCell>
                                <TableCell align="left">{+shippingCharges + +OrderDeatil.price} ₹
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell component="th" align="left">Payment</TableCell>
                                <TableCell align="left">{OrderDeatil.paymentMode}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </>
    );
}

export default OrderDetailsPage;