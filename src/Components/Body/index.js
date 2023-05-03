import ItemCard from "../ItemCard";

const Body = (props) => {
    const products = props.products;
    const setProducts = props.setProducts;
    const setCartItems = props.setCartItems;
    const cartItems = props.cartItems
    return (
        // <!-- Body Section-->
        <section className="py-5 mb-12 overflow-auto">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                 { products.map(({id, saleBadge, title, ratings, oldPrice, price, type, inCart }) => 
                        <ItemCard key={id} id= {`item-${id}`} saleBadge={saleBadge} title={title} ratings={ratings} oldPrice={oldPrice} price={price} type={type} inCart={inCart} setCartItems = {setCartItems} cartItems = {cartItems} products = {products} setProducts={setProducts} />
                     )}
    
                </div>
            </div>
        </section>

    )
}
export default Body;