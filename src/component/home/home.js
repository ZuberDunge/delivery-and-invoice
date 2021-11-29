import React, {useContext} from 'react'
import {DataOfStore} from '../context/context'

function Home() {
    const {shipingData} = useContext(DataOfStore)
    console.log(shipingData);
    return (
        <>
        <div>
            <h1>This is Our Team Project Named as : Delivery Invoice</h1>
            <h2>Chnages from the Development Branch</h2>
        </div>
        <div className="table">
            <table>
                <tr>
                    <th>item Name</th>
                    <th>Status</th>
                    <th>Track</th>
                    <th>Invoice</th>
                </tr>
                {shipingData.map((item, index) => {
                    <tr key={index}>
                        <td>{item.itemName}</td>
                        <td>{item.status}</td>
                        <td>{item.status === "delivered" ? "Delivered" : "On the Way"}</td>
                        <td><button>Get Invoice</button></td>
                    </tr>
                })}
                
            </table> 
        </div>
        </>
    )
}

export default Home;
