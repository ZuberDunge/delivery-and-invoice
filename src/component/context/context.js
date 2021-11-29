import { createContext, useState } from "react";

export const DataOfStore = createContext()
 
function DataStore (props) {
    const [shipingDetails, setShipingDeatils] = useState([
        {
            id:1,
            status: 'delivered',
            itemName : "lorem",
            orderId : 100,
            orderDate : 21/11/21,
            price : 50,
            quantity : 1,
            customerName : "Paritosh",
            Address : 'Timarpur',
            sellerName : "flipkart",
        },
        {
            id:2,
            status: 'In Transit',
            itemName : "Dry Fruits - badam(california)",
            orderId : 101,
            orderDate : 29/11/21,
            price : 670,
            quantity : 1,
            customerName : "Rahul",
            Address : 'sant nagar',
            sellerName : "Grocery Guru",
        },
    ])
    let shipingData = shipingDetails;
    return (
              <DataOfStore.Provider 
                value = {{shipingData}}
              >
                  {console.log(shipingData)}
                 {props.children}
              </DataOfStore.Provider>
    );
}

export default DataStore;