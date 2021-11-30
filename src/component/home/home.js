import React, { useContext } from 'react'
import "../Style/Home.css"
import { ShippingDataContext } from '../context/context'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Home() {
    const { shippingData } = useContext(ShippingDataContext)
    console.log(shippingData);
    return (
        <>

            <div className="table">
                <TableContainer component={Paper}>
                    <Table sx={{ maxWidth: 1000, margin: "auto" }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell className="HIDE-ON-PHONE" align="right">Status</TableCell>
                                <TableCell className="HIDE-ON-PHONE" align="right">Track</TableCell>
                                <TableCell align="right">Invoice</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shippingData.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row"><Link to={`/students/view/${item.id}`}>{item.itemName}</Link></TableCell>
                                    <TableCell className="HIDE-ON-PHONE" align="right">{item.status}</TableCell>
                                    <TableCell className="HIDE-ON-PHONE" align="right">{item.status === "Delivered" ? "Delivered" : "On the Way"}</TableCell>
                                    <TableCell align="right"><button disabled={item.status === "Delivered" ? false : true} className="get-invoice">Get Invoice</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
            <div>
                <h2>Chnages from the Development Branch</h2>
            </div>
        </>
    )
}

export default Home;
