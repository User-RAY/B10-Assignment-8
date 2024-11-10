import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const data = useLoaderData();

    

    return (
        
        <>
            <Helmet>
                <title>Statistics | Ray Gadget</title>
            </Helmet>
            <div className="  mx-auto bg-[#9538E2] text-white ">
  
            
                <div className="w-11/12 md:w-4/5 mx-auto">
                    <div className="flex flex-col justify-center items-center text-center text-white pb-4">
                        <h1 className="text-4xl font-bold  mt-8">Statistics</h1>
                        <p className="my-8 w-2/3">See All the Prices of the Product in a Bar Chart</p>
                    </div>
                </div>
            </div>

            <div className='w-11/12 md:w-4/5 mx-auto'>
                <h1 className='text-2xl font-bold mt-8'>Statistics</h1>
            </div>


                <div className='w-[95%] md:w-4/5 mx-auto bg-white py-8 md:p-4 lg:p-8 rounded-2xl mt-8'>
                <ResponsiveContainer width="100%" height={600}>
                    <BarChart data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                    }} className='-translate-x-2'>
                    <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="product_title" className='text-[0.65rem] md:text-[0.8rem]' />
                        <YAxis className='text-[0.8rem] md:text-base ml-5'/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    </BarChart>
                    </ResponsiveContainer>
                </div>


                

        </>
    );
};

export default Statistics;