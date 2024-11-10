import Cart from "../Cart/Cart";
import PropTypes from "prop-types";



const CartList = ({addedCart, setAddedCart}) => {


    
    return (
        <>

            {
                addedCart.map(cartSelect => <Cart key={cartSelect.product_id} cartSelect={cartSelect} setAddedCart={setAddedCart}></Cart>)
            }
            
        </>
    );
};


CartList.propTypes = {
    addedCart : PropTypes.array,
    setAddedCart: PropTypes.func,
}

export default CartList;