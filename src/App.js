import './App.css';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import CheckOut from './Components/CheckOut';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Main from './Components/Main';
import { CartContext } from './Components/CartContext';
import { useState } from 'react';



function App() {

  const [cartItems, setCartItems] = useState([])


  return (
    <div className="App">
        <BrowserRouter>
            <CartContext.Provider value={{cartItems, setCartItems }}>

                <div> <Link to="/">Main Page</Link></div>
                <div><Link to="/Product">Product List</Link></div>
                <div><Link to="/CheckOut">CheckOut</Link></div>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/Product" element={<ProductList/>}/>
              <Route path="/ProductDetail" element={<ProductDetail/>}>
                <Route path=":id"  element={<ProductDetail/>} />
              </Route>
              <Route path="/CheckOut" element={<CheckOut/>}/>
              <Route path="*" element={<h1>Not Found</h1>}/>
            </Routes>

        </CartContext.Provider>
      </BrowserRouter>
   </div>
  );
}

export default App;
