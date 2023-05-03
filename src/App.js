import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Body from './Components/Body';


function App() { 
  const [cartItems, setCartItems] = useState(0);

  const [products, setProducts] = useState([
    { 
      id : "1001",
      saleBadge : false,
      title : "Fancy Product",
      ratings : "0",
      oldPrice : "", 
      price: "$40.00 - $80.00",
      type: "view",
      inCart : false
    },
    { 
      id : "1002",
      saleBadge : false,
      title : "Special Item",
      ratings : "5",
      oldPrice : "$20.00", 
      price: "$18.00",
      type: "add",
      inCart : false
    },
    { 
      id : "1003",
      saleBadge : true,
      title : "Sale Item",
      ratings : "0",
      oldPrice : "$50.00", 
      price: "$25.00",
      type: "add",
      inCart : false
    },
    { 
      id : "1004",
      saleBadge : false,
      title : "Popular Item",
      ratings : "5",
      oldPrice : "", 
      price: "$40.00",
      type: "add",
      inCart : false
    },
    { 
      id : "1005",
      saleBadge : true,
      title : "Sale Item",
      ratings : "0",
      oldPrice : "$50.00", 
      price: "$25.00",
      type: "add",
      inCart : false
    },
    { 
      id : "1006",
      saleBadge : false,
      title : "Fancy Product",
      ratings : "0",
      oldPrice : "", 
      price: "$120.00 - $280.00",
      type: "view",
      inCart : false
    },
    { 
      id : "1007",
      saleBadge : true,
      title : "Special Item",
      ratings : "5",
      oldPrice : "$20.00", 
      price: "$18.00",
      type: "add",
      inCart : false
    },
    { 
      id : "1008",
      saleBadge : true,
      title : "Popular Item",
      ratings : "5",
      oldPrice : "", 
      price: "$40.00",
      type: "add",
      inCart : false
    }
  ]);  

  return (
    <div className="App">
      <Navbar cartItems = {cartItems} products = {products} setCartItems = {setCartItems}  />
      {/* <CartBody products = {products} cartItems = {cartItems} setCartItems = {setCartItems} /> */}
      <Header />
        <Body products = {products} setProducts={setProducts} cartItems = {cartItems} setCartItems = {setCartItems} />
      <Footer />
    </div>
  );
}

export default App;
