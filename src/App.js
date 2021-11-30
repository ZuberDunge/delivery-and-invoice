import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/home/home';
import Navbar from './component/navbar/Navbar'
import ShippingDataProvider from './component/context/context';
import Login from './component/Login';
import Invoice from './component/Invoice';
function App() {
  return (

    <div className="App">
      <Navbar />
      <ShippingDataProvider>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/invoice/view/:id' element={<Invoice />} />
        </Routes>

      </ShippingDataProvider>
    </div>
  );
}

export default App;
