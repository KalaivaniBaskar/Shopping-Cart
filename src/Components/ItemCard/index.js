import { useEffect } from 'react';
const ItemCard = ({id, saleBadge, title, ratings, oldPrice, price, type, inCart, setCartItems, cartItems, products,setProducts }) => { 
   // console.log(id, saleBadge, title, ratings, oldPrice, price, type, inCart, setCartItems, cartItems );
    ratings = Number(ratings);
    var arrRating = Array.from({ length: `${ratings}` }, (_, i) => i+1);
    
    const addProduct = (e) => {
        var cartid = e.target.id.split("-");
        cartid = cartid[1];
       // console.log(cartid);
        setCartItems( cartItems + 1 )  
        var remid = 'rembtn-'+cartid;
        let r = document.getElementById(remid);
        r = r.parentElement;
        r.style.display = "block";
        let idx = products.findIndex( el => el.id === cartid ) 
        var copy = [...products]
        copy[idx].inCart = true;
        products[idx].inCart = true; 
        setProducts([...copy]);
        var el = e.target;
        el.classList.add('disabled');
      //  console.log("push", products);
    }

   const removeProduct = (e) => {
    var remid = e.target.id;
        let r = document.getElementById(remid)
        r = r.parentElement;
        r.style.display = "none";
    var cartid = e.target.id.split("-");
    cartid= cartid[1]
    //console.log(cartid);
    let idx = products.findIndex( el => el.id === cartid ) 
    var copy = [...products]
    copy[idx].inCart = false;
    products[idx].inCart = false; 
    let btn = 'itembtn-'+ cartid;
    let btnel = document.getElementById(btn);
    btnel.classList.remove('disabled') 
    setCartItems( cartItems - 1 )  
    setProducts([...copy]);
  // console.log("remove",products);
  }
   
  useEffect ( ( ) => {

  },[products]);
    return ( 

        <div className="col mb-5">
                        <div className="card h-100">
                            {/* // <!-- Sale badge--> */}
                            { saleBadge && <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div> }
                            {/* // <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* // <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{title}</h5>
                                    {/* <!-- Product reviews--> */}
                                   { (ratings > 0) && 
                                    <div className="d-flex justify-content-center small text-warning mb-2"> 
                                    { arrRating.map( (el) => { return <div key = {el} className="bi-star-fill"></div>} )}                                      
                                    </div>
                                   }
                                    {/* <!-- Product price--> */}
                                   { (oldPrice !== "") && <span className="text-muted text-decoration-line-through"> {oldPrice} </span>} 
                                    {price}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                { (type === "view") && <div className="text-center"><button className="btn btn-outline-dark mt-auto" id={`itembtn-${id}`} href="/">View options</button></div> }

                                { (type === "add") &&  
                                 <div className="text-center"><button className="btn btn-outline-dark mt-auto" id={`itembtn-${id.split("-")[1]}`} title={title}  onClick={addProduct}> Add To Cart </button></div> }

                                {<div className="text-center remove-btn">
                                    <button className="btn btn-outline-dark my-2 mx-1" id={`rembtn-${id.split("-")[1]}`} title={title}  onClick={removeProduct}>  Remove from Cart </button></div> }
                                
                            </div>
                        </div>
                    </div>
    )
}
export default ItemCard;