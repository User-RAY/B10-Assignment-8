import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";

import './Nav.css'
import { useContext } from "react";
import { AddedCartContext, CartContext, FavContext } from "../../utility/CartContext";


const Nav = () => {

    const check = useParams();

    const [cartProduct] = useContext(CartContext);
    const [favProduct] = useContext(FavContext);

    const {pathname} = useLocation();

    const navigate = useNavigate();

    const [addedCart] = useContext(AddedCartContext);
    
    const totalPrice = addedCart.reduce((c, item) => c + item.price, 0);

    return (
        <div>

            <div className={` w-[96%] mx-auto  rounded-t-2xl text-white ${pathname === '/' || pathname === `/category/${check.category}` ? 'bg-[#9538E2]': 'bg-transparent text-[#9538E2]'}`}>
                <div className=" w-11/12 md:w-[87%] mx-auto">
                    <div className={`navbar bg-[#9538E2] ${pathname === '/' || pathname === `/category/${check.category}` ? 'bg-[#9538E2]': 'bg-transparent text-[#9538E2]'}`}>
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                                    <li>
                                        <NavLink to="/" className={`${check.category != undefined ? 'active' : '' }`}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Statistics">Statistics </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Dashboard">Dashboard </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Contact">Contact Us</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <a className="btn btn-ghost font-bold text-xl">Ray Gadget</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li className="this">
                                    <NavLink to="/" className={`${check.category != undefined ? 'active' : '' }`}>Home </NavLink>
                                </li>
                                <li className="this">
                                    <NavLink to="/Statistics">Statistics </NavLink>
                                </li>
                                <li className="this">
                                    <NavLink to="/Dashboard">Dashboard </NavLink>
                                </li>
                                <li className="this">
                                    <NavLink to="/Contact">Contact Us </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className={`indicator text-black bg-white rounded-full p-2 ${pathname === '/' || pathname === `/category/${check.category}` ? '': 'border'}`}>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 text-2xl`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">{cartProduct}</span>
                                    </div>
                                </div>

                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                    <div className="card-body">
                                        <span className="text-lg font-bold text-[#9538E2]">{cartProduct} Items</span>
                                        <span className="text-info">Subtotal: ${totalPrice}</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block" onClick={()=>navigate('/Dashboard')}>View Dashboard</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className={`indicator text-black bg-white rounded-full p-2 ${pathname === '/' || pathname === `/category/${check.category}` ? '': 'border'}`}>
                                        <FaRegHeart className={`text-lg`} />
                                        <span className="badge badge-sm indicator-item">{favProduct}</span>
                                    </div>
                                </div>

                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                    <div className="card-body">
                                    <span className="text-lg font-bold text-[#9538E2]">{favProduct} Items</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block" onClick={()=>navigate('/Dashboard')}>View Dashboard</button>
                                    </div>
                                    </div>
                                </div>
                
                            </div>
                
                
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Nav;