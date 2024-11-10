import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Helmet } from 'react-helmet-async';


const Contact = () => {
    return (
        <div>
            
            <Helmet>
                <title>Contact Us | Ray Gadget</title>
            </Helmet>


            <div className="w-11/12 md:w-4/5 mx-auto h-full mt-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl">Contact us</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-[#9538E2] text-white rounded-2xl">
                
                    <div className="py-48 border-b md:border-b-0 border-r flex flex-col justify-center items-center">
                        <FaPhone className="text-3xl" />
                        <h1 className="my-2">Contact Us</h1>
                        <h2>13794 / 09678785403</h2>
                    </div>
                    <div className="py-48  flex flex-col justify-center items-center">
                        <IoMail className="text-3xl" />
                        <h1 className="my-2">For Corporate Deals & Complain</h1>
                        <h2>webteam@raygadget.com</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;