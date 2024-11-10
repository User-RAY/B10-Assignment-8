import { Helmet } from 'react-helmet-async';
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories"

const Home = () => {
    // window.scrollTo(0, 20);
    const categoriesData = useLoaderData();

    
    return (
        <>
            <Helmet>
                <title>Home | Ray Gadget</title>
            </Helmet>

            <div className="bg-[#9538E2] w-[96%] mx-auto relative mb-64 sm:mb-[24rem]  lg:mb-[32rem] rounded-b-2xl">
                <div className="w-11/12 md:w-4/5 mx-auto">
                    <div className="flex flex-col justify-center items-center text-center pb-36">
                        <h1 className="text-3xl md:text-6xl mt-12 font-bold text-white">Upgrade Your Tech Accessorize with Ray Gadget Accessories</h1>
                        <p className="my-8 w-4/6 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <Link to='/Dashboard' className="btn text-[#9538E2] bg-white rounded-full px-8 mb-10">Shop Now</Link>
                    </div>
                    <div className="absolute -translate-y-1/4 w-11/12 md:w-4/5 lg:h-full mx-auto">
                        <div className="border-2 border-white bg-white/[.3] md:p-4 rounded-2xl w-full h-full">
                            <img src="../images/banner.jpg" alt="" className=" object-cover h-full w-full rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 md:w-4/5 mx-auto text-center mb-8">

                <h1 className="text-4xl my-8 font-bold">Explore Cutting-Edge Gadgets</h1>

                <div className="grid grid-cols-1 md:grid-cols-[20%_80%] lg:gap-4">

                    <div className="border  bg-white max-h-[30rem] min-h-[30rem] rounded-2xl mr-2">
                        <Categories categories={categoriesData}></Categories>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:mt-0 ">
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Home;