import { useLoaderData, useParams } from "react-router-dom";

import ProductDetail from "../ProductDetail/ProductDetail";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    window.scrollTo(0, 30);
    const cards = useLoaderData();
    const {id} = useParams();

    const productId = parseInt(id);

    const [card, setCard] = useState({});

    useEffect(() =>{
        const filterCard = [...cards].find(c => c.product_id === productId);
        
        setCard(filterCard);
    }, [productId, cards])



    return (
        <div className="mb-[500px]">

            <div className="bg-[#9538E2]  mx-auto relative mb-[45rem] lg:mb-[25rem]">
                <div className="w-11/12 md:w-4/5 mx-auto">
                    <div className="flex flex-col justify-center items-center text-center pb-36">
                        <h1 className="text-4xl font-bold mt-8 text-white">Product Details</h1>
                        <p className="mt-4 w-4/6 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                    </div>
                    <div className="absolute -translate-y-[15%] lg:-translate-y-[40%] w-11/12 md:w-4/5 lg:h-full mx-auto">

                        <ProductDetail key={card.product_id} card={card} cards={cards}></ProductDetail>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductDetails;