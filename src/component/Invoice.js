import React, { useContext } from 'react'
import "./Style/Invoice.css"
import { useParams } from "react-router-dom";
import { ShippingDataContext } from './context/context';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Invoice() {
    const { shippingData } = useContext(ShippingDataContext);
    const { id } = useParams()
    let OrderDeatil = shippingData.find(order => order.id === parseInt(id))
    let shippingCharges = 50;
    let currentDate = (new Date()).toString().split(' ').splice(1, 3).join(' ');
    return (
        <div className="invoice-container">


            <h2>Order Invoice for {OrderDeatil.customerName} </h2>
            <h5>Invoice Date : {currentDate} </h5>
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
    );
}

export default Invoice;