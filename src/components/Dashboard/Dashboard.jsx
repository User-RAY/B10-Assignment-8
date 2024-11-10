import { useContext, useState } from "react";
import CartList from "../CartList/CartList";
import WishList from "../WishList/WishList";
import "./Dashboard.css"
import { AddedCartContext, CartContext } from "../../utility/CartContext";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import { RiSoundModuleLine } from "react-icons/ri";



const Dashboard = () => {

    const [currentBtn, setCurrentBtn] = useState('cart');

    const [modalPrice, setModalPrice] = useState(0);

    const [addedCart, setAddedCart] = useContext(AddedCartContext);

    const[, setCartProduct] = useContext(CartContext);

    const navigate = useNavigate();

    const handleBtn = (btn) =>{
        setCurrentBtn(btn);
        // idSort();
    }


    
    const totalPrice = addedCart.reduce((c, item) => c + item.price, 0);

    const cartLength = addedCart.length;
    
    const priceSort = () => {

        if(addedCart.length > 0){
            const SortCartSelected = [...addedCart].sort((a, b)=>{
               let m = parseInt(a.price);
               let n = parseInt(b.price);
                return (n || 0) - (m||0);
            })

            setAddedCart(SortCartSelected);    
        }
    } 

    const handlePurchase = () => {
        setModalPrice(totalPrice)
        document.getElementById('my_modal_5').showModal();  


        const data = [];
        localStorage.setItem('cart', JSON.stringify(data));
        setAddedCart(data);
        setCartProduct(data.length);

    }


    // const idSort = () => {

    //     if(addedCart.length > 0){
    //         const SortCartSelected = [...addedCart].sort((a, b)=>{
    //            let m = parseInt(a.product_id);
    //            let n = parseInt(b.product_id);
    //             return (n || 0) - (m||0);
    //         })

    //         setAddedCart(SortCartSelected);    
    //     }
    // } 

    return (



        <>

            <Helmet>
                <title>Dashboard | Ray Gadget</title>
            </Helmet>

            <div className="bg-[#9538E2] mx-auto relative mb-10">
                <div className="w-11/12 md:w-4/5 mx-auto">
                    <div className="flex flex-col justify-center items-center text-center text-white pb-4">
                        <h1 className="text-4xl font-bold  mt-8">Dashboard</h1>
                        <p className="my-8 w-2/3">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        
                        <div className="flex">
                            <button className={`btn my-5 rounded-full px-14 mr-4 font-bold bg-transparent text-white ${currentBtn === 'cart' ? 'active' : ''}`} onClick={() => {handleBtn('cart')}} >Cart</button>
                            <button className={`btn my-5 rounded-full px-14 font-bold bg-transparent text-white ${currentBtn === 'wish' ? 'active' : ''}`}onClick={() => {handleBtn('wish')}} >Wishlist</button>
                        </div>
        
                    </div>
        
                </div>
            </div>

            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center min-h-20 ">
                    <h2 className="font-bold text-2xl">{currentBtn === 'cart' ? 'Cart' : 'WishList'}</h2>
                    <div className={`flex flex-col md:flex-row justify-between items-center ${currentBtn === 'cart' ? '' : 'hidden'}`}>
                        <h2 className="mr-4 font-bold text-xl">Total cost: ${totalPrice}</h2>
                        <button className="btn text-lg my-5 rounded-full px-6 mr-4 border-[#9538E2] font-semibold text-[#9538E2] bg-transparent" disabled={!cartLength} onClick={()=>priceSort()}>Sort by Price <RiSoundModuleLine /></button>
                        <button className="btn my-5 rounded-full px-8  bg-[#9538E2] text-white font-medium" disabled={!cartLength} onClick={()=>handlePurchase()} >Purchase</button>
                    </div>
                </div>

                <div>

                    <div className={`${currentBtn === 'wish' ? 'hidden' : "" }`}>
                        <CartList addedCart={addedCart} setAddedCart={setAddedCart} ></CartList>
                    </div>

                    <div className={`${currentBtn === 'cart' ? 'hidden' : "" }`}>
                        <WishList></WishList>
                    </div>

                </div>
            </div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}
  
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box text-center">

                    <div className="flex justify-center"><img src="../images/Group.png" alt="" className="mb-5" /></div>
                    <h3 className="font-bold text-lg">Payment Successfull!</h3>
                    <div className="border-t border-black my-2"></div>
                    <p className="py-4">Thanks for purchasing.</p>
                    <p className="py">Total: ${modalPrice}</p>

                <div className="mt-6">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn w-full rounded-full" onClick={()=>navigate('/')}>Close</button>
                </form>
                </div>
            </div>
            </dialog>


        </>
    );
};

export default Dashboard;