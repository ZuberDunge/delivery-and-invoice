import { createContext, useState } from "react";
export const ShippingDataContext = createContext()

const ShippingDataProvider = (props) => {
    const [shippingDetails, setShippingDeatils] = useState([
        {
            id: 1,
            status: 'Delivered',
            itemName: "lorem",
            orderId: 100,
            orderDate: "21 / 11 / 21",
            price: 530,
            quantity: 1,
            customerName: "Paritosh",
            Address: 'Timarpur',
            sellerName: "flipkart",
            paymentMode: "COD"
        },
        {
            id: 2,
            status: 'In Transit',
            itemName: "Dry Fruits - badam(california)",
            orderId: 101,
            orderDate: "29 / 11 / 21",
            price: 670,
            quantity: 1,
            customerName: "Rahul",
            Address: 'sant nagar',
            sellerName: "Grocery Guru",
            paymentMode: "Paid"
        }, {
            id: 3,
            status: 'Delivered',
            itemName: "Mobile",
            orderId: 102,
            orderDate: "21 / 11 / 21",
            price: 420,
            quantity: 1,
            customerName: "Viraj",
            Address: 'Gujrat',
            sellerName: "Amazon",
            paymentMode: "Paid"
        },
        {
            id: 4,
            status: 'In Transit',
            itemName: "Dhaniya",
            orderId: 103,
            orderDate: "29 / 11 / 21",
            price: 15,
            quantity: 1,
            customerName: "Rahul",
            Address: 'New Delhi',
            sellerName: "Paritosh",
            paymentMode: "COD"
        },
    ])
    const shippingData = shippingDetails;

    return (
        <ShippingDataContext.Provider value={{ shippingData }}>
            {props.children}
        </ShippingDataContext.Provider >
    );
}

export default ShippingDataProvider;