import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Cards = () => {

    const cards = useLoaderData();
    const category = useParams();


    
    const [gadgets, setGadgets] = useState([]);

    useEffect(() =>{
        let filteredGadgets =[];
        if (category.category === 'All Product' || category.category === undefined) {
            filteredGadgets = [...cards];
        } else {
            filteredGadgets = [...cards].filter(
                product => product.category === category.category
            );
        }
        setGadgets(filteredGadgets);
    }, [category, cards])

    
    return (
        <>
            {   
            
                gadgets.length === 0 ? <h1 className="text-5xl text-center col-span-3 mt-12"> Sorry, this product is not currently available</h1> : gadgets.map(card => <Card key={card.product_id} card={card}></Card>)
                

            }
        </>
    );
};

export default Cards;