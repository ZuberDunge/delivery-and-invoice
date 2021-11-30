import logo from './logo.svg';
import './App.css';
import Home from './component/home/home';
import Navbar from './component/navbar/Navbar'
import ShippingDataProvider from './component/context/context';
function App() {
  return (

    <div className="App">
      <Navbar />
      <ShippingDataProvider>
        <Home />
      </ShippingDataProvider>
    </div>
  );
}

export default App;
