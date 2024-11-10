import { IoIosCloseCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import { addData, getData, removeData } from "../../utility/db";
import { useContext } from "react";
import { AddedCartContext, CartContext, FavContext } from "../../utility/CartContext";
import { useLoaderData } from "react-router-dom";
import { toast } from 'react-toastify'

const Wish = ({wishSelect, setAddedWish}) => {

    const {product_id, product_title, product_image, description, price, } = wishSelect;

    const productData = useLoaderData();

    const [, setCartProduct] = useContext(CartContext);
    const [, setFavProduct] = useContext(FavContext);




    const [, setAddedCart] = useContext(AddedCartContext);

    const handleAdd = (product_id, title) => {

        const check = getData('cart').find(product => product === product_id);

        addData('cart', product_id);

        const c = getData('cart');



        const selectedCart = [...productData].filter(select => c.includes(select.product_id));
        setAddedCart(selectedCart);

        const len = getData('cart').length;
        

        setCartProduct(len); 

        handleWishRemove(product_id);
        
        if (check) {
            warn(title);
        } else{
            success(title); 
        }
        

    }

    const handleWishRemove = (product_id)=>{
        removeData('fav', product_id );

        const ca = getData('fav');
        const selectedCart = [...productData].filter(select => ca.includes(select.product_id));
        setAddedWish(selectedCart);

        const len = getData('fav').length;

        setFavProduct(len);

        
    }


    const success = (product_title) => {
        toast.success(`Congrats ${product_title} has been added to CARTLIST`, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    const warn = (product_title) =>{
        toast.warn(`The ${product_title} has ALREADY been added to CARTLIST`, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }


    
    

    return (
        <div>

            <div className="navbar bg-base-100 justify-between border my-4 rounded-xl">
                <div className="flex flex-col md:flex-row navbar-start w-3/4">

                    <img src={product_image} alt="logo" className='object-contain w-48 h-48 rounded-xl' />
                    <div className='flex flex-col justify-between items-start ml-4 min-h-40'>
                        <h1 className="font-semibold text-2xl">{product_title}</h1>
                        <h2 className="font-semibold">Description: <span className="text-black/[.6] font-normal">{description}</span> </h2>
                        <h2 className=" font-semibold text-black">Price: $ {price} </h2>
                        <button className="btn rounded-full bg-[#9538E2] text-white px-8 h-0" onClick={()=>handleAdd(product_id, product_title)}>Add to Cart</button>
                    </div>
                </div>
                <div className="navbar-end w-auto self-start">
                    <a className="btn bg-white border-none shadow-none text-red-600" onClick={()=>handleWishRemove(product_id)}> <IoIosCloseCircleOutline className="text-3xl"/>
                    </a>
                </div>
            </div>


            
        </div>
    );
};

Wish.propTypes = {
    wishSelect : PropTypes.object,
    setAddedWish : PropTypes.func,
}


export default Wish;