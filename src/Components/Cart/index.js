const Cart = (props) => { 
    var cartItems = props.cartItems; 
  
    return(
        <div className="d-flex">        
        <button className="btn btn-outline-dark" type="button"   >
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartItems}</span>
        </button>        
      </div> 
    )
}
export default Cart;