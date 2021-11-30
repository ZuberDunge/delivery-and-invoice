import { createContext, useState } from "react";

export const ShippingDataContext = createContext()

const ShippingDataProvider = (props) => {
    const [shippingDetails, setShippingDeatils] = useState([
        {
            id: 1,
            status: 'Delivered',
            itemName: "lorem",
            orderId: 100,
            orderDate: 21 / 11 / 21,
            price: 50,
            quantity: 1,
            customerName: "Paritosh",
            Address: 'Timarpur',
            sellerName: "flipkart",
        },
        {
            id: 2,
            status: 'In Transit',
            itemName: "Dry Fruits - badam(california)",
            orderId: 101,
            orderDate: 29 / 11 / 21,
            price: 670,
            quantity: 1,
            customerName: "Rahul",
            Address: 'sant nagar',
            sellerName: "Grocery Guru",
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