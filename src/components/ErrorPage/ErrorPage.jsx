import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>

            
            <div className="bg-[#9538E2] text-white flex flex-col justify-center items-center  min-h-screen">
                
                <div className="py-48 flex flex-col justify-center items-center text-center">

                    <h1 className="text-6xl text-red-500 mb-8">Sorry this is the errorpage</h1>

                    <NavLink to="/"><button className="btn text-green-500">Go Home</button></NavLink>
                </div>

            </div>

        </div>
    );
};

export default ErrorPage;