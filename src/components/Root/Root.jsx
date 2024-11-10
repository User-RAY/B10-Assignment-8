import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartContext, FavContext, AddedCartContext, AddedWishContext } from "../../utility/CartContext";
import { getData } from "../../utility/db";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

const Root = () => {

    const [cartProduct, setCartProduct] = useState(0);
    const [favProduct, setFavProduct] = useState(0);

    const [addedCart, setAddedCart] = useState([]);
    const [addedWish, setAddedWish] = useState([]);
    const [totalProduct, setTotalProduct] = useState([]);


    useEffect(()=>{
        fetch('../gadgets.json')
        .then(res => res.json())
        .then(data => setTotalProduct(data))
    }, [])

    useEffect(()=>{

        const c = getData('cart').length;
        const f = getData('fav').length;
        c && setCartProduct(c);
        f && setFavProduct(f);

        const ca = getData('cart');
        const fa = getData('fav');

        const selectedCart = [...totalProduct].filter(select => ca.includes(select.product_id));
        const selectedWish = [...totalProduct].filter(select => fa.includes(select.product_id));

        ca && setAddedCart(selectedCart);
        fa && setAddedWish(selectedWish);


    },[totalProduct])






    return (
        <div className="bg-[#D9D9D9]/[.3] pt-8">

            <HelmetProvider>
                <AddedWishContext.Provider value={[addedWish, setAddedWish] }>
                    <AddedCartContext.Provider value={[addedCart, setAddedCart]}>
                        <CartContext.Provider value={[cartProduct, setCartProduct]}>
                            <FavContext.Provider value={[favProduct, setFavProduct]}>

                                <div className="">
                                    <Nav></Nav>
                                </div>
                                <div className="min-[2560px]:min-h-screen"><Outlet></Outlet></div>
                                <Footer></Footer>
                                <ToastContainer />

                            </FavContext.Provider>
                        </CartContext.Provider>
                    </AddedCartContext.Provider>
                </AddedWishContext.Provider>

            </HelmetProvider>

        </div>
    );
};

export default Root;