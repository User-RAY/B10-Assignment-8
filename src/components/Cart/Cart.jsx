import { IoIosCloseCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import { getData, removeData } from "../../utility/db";
import { useContext } from "react";
import { CartContext } from "../../utility/CartContext";
import { useLoaderData } from "react-router-dom";

const Cart = ({cartSelect, setAddedCart}) => {

    const {product_id, product_title, product_image, description, price } = cartSelect;

    const cartData = useLoaderData(); 

    const [, setCartProduct] = useContext(CartContext);

    const handleCartRemove = (product_id)=>{
        removeData('cart', product_id );


        const ca = getData('cart');
        const selectedCart = [...cartData].filter(select => ca.includes(select.product_id));
        
        setAddedCart(selectedCart);

        const len = getData('cart').length;

        setCartProduct(len); 

    }


    return (
        <>

            <div className="navbar bg-base-100 justify-between border my-4 rounded-xl h-[35rem] md:h-auto">
                <div className="flex flex-col md:flex-row navbar-start w-3/4">

                    <img src={product_image} alt="logo" className='object-contain w-48 h-48 rounded-xl' />
                    <div className='flex flex-col justify-around items-start ml-8 max-h-40 min-h-40'>
                        <h1 className="font-semibold text-2xl">{product_title}</h1>
                        <h2 className="text-black/[.6] text-lg">{description}</h2>
                        <h2 className="text-xl text-black font-semibold">Price: $ {price} </h2>
                    </div>
                </div>
                <div className="navbar-end w-auto self-start">
                    <a className="btn bg-white border-none shadow-none text-red-600" onClick={()=>handleCartRemove(product_id)}> <IoIosCloseCircleOutline className="text-3xl"/>
                    </a>
                </div>
            </div>
            
        </>
    );
};

Cart.propTypes = {
    cartSelect : PropTypes.object,
    cartData : PropTypes.array,
    setAddedCart : PropTypes.func,
}


export default Cart;