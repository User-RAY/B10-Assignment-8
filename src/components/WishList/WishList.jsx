import { useContext } from "react";
import Wish from "../Wish/Wish"
import { AddedWishContext } from "../../utility/CartContext";


const WishList = () => {

    const [addedWish, setAddedWish] = useContext(AddedWishContext);


    return (
        <div>

            {
                addedWish.map(wishSelect => <Wish key={wishSelect.product_id} wishSelect={wishSelect}  setAddedWish={setAddedWish}></Wish>)
            }

        </div>
    );
};

export default WishList;