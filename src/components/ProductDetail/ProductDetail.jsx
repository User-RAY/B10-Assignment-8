import PropTypes from "prop-types";
import { Helmet } from 'react-helmet-async';
import ReactStars from "react-rating-stars-component";

import { FaRegHeart } from "react-icons/fa";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { addData, getData } from "../../utility/db";
import { useContext, useEffect, useState } from "react";
import { CartContext, FavContext, AddedCartContext, AddedWishContext } from "../../utility/CartContext";

import { toast } from 'react-toastify'

const ProductDetail = ({card, cards}) => {
    const {product_id, product_title, product_image, price, availability, description, rating, Specification = []} = card;

    const [, setCartProduct] = useContext(CartContext);
    const [, setFavProduct] = useContext(FavContext);

    const [, setAddedCart] = useContext(AddedCartContext);

    const [, setAddedWish] = useContext(AddedWishContext);

    const [dis, setDis] = useState(false);

    useEffect(()=> {
        const w = getData('fav');

        const checkWish = w.find(product => product === product_id);
        console.log(checkWish);
        
        checkWish && setDis(true); 
    },[product_id])



    const handleAdd = (type, id) => {

        const check = getData(type).find(product => product === id);
        
        
        addData(type, id);

        const len = getData(type).length;
        if(type === 'cart') {
            setCartProduct(len); 

            const c = getData(type);

            const selectedCart = [...cards].filter(select => c.includes(select.product_id));
            setAddedCart(selectedCart);

            const pro = [...cards].filter(select => select.product_id === id);
            if (check) {
                warn(pro[0].product_title, 'CARTLIST');

            } else{
                success(pro[0].product_title, 'CARTLIST'); 
            }


        } else if(type === 'fav'){
            setFavProduct(len);

            const f = getData(type);

            const selectedWish = [...cards].filter(select => f.includes(select.product_id));
            setAddedWish(selectedWish);


            const pro = [...cards].filter(select => select.product_id === id);
            if (!check) {
                success(pro[0].product_title, 'WISHLIST'); 
                setDis(true);
            }

        }

    }

    const success = (product_title, list) => {
        toast.success(`Congrats ${product_title} has been added to ${list}`, {
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

    const warn = (product_title, list) =>{
        toast.warn(`SORRY. the ${product_title} has ALREADY been added to ${list}`, {
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

    return (
        <div>

            <Helmet>
                <title>Product Details | Ray Gadget</title>
            </Helmet>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                src={product_image}
                alt="Album"
                className="rounded-xl object-contain w-[420px]"  />
            </figure>
            <div className="card-body">
                <h1 className="card-title font-semibold text-3xl">{product_title}</h1>

                <h2 className="font-semibold text-xl my-2">Price: ${price}</h2>

                <div className={`badge badge-outline text-[#309C08] py-3 px-2 mb-2 font-medium ${availability ? 'bg-[#309C08]/[.1]': 'bg-red-400'}`}>{availability ? 'In Stock' : 'Out of Stock'}</div>

                <p className="flex-grow-0 text-[#09080F]/[.6] text-lg">{description}</p>

                <h2 className="font-bold ">Specification:</h2>
                <ol className="list-decimal ml-5 text-[#09080F]/[.6]">
                    {
                        //   Specification &&  Specification.map((spec,index) => <li key={index}>{spec}</li> )
                        //   Specification?.map((spec,index) => <li key={index}>{spec}</li> )
                        Specification.map((spec,index) => <li key={index}>{spec}</li> )
                    }
                </ol>
                <div className="flex justify-start">
                    <h2 className="font-bold">Ratings</h2><FaStar className="text-yellow-400 text-xl ml-1" />
                </div>
                <div className="flex justify-start items-center">
                    <ReactStars size={30} value={rating} edit={false} isHalf={true}/>
                    <div className="badge badge-outline ml-2">{rating}</div>
                </div>
                <div className="card-actions justify-start">
                <button className="btn rounded-full bg-[#9538E2] text-white px-4" onClick={()=>handleAdd('cart', product_id)}>Add to card <AiOutlineShoppingCart className="text-xl" /></button>
                <button className="btn rounded-full text-xl bg-white border border-[#09080F]/[.2]" disabled={dis} onClick={()=>handleAdd('fav', product_id)}><FaRegHeart /></button>
                </div>
            </div>
            </div>
        </div>
    );
};


ProductDetail.propTypes = {
    card : PropTypes.object,
    cards : PropTypes.array,
}

export default ProductDetail;