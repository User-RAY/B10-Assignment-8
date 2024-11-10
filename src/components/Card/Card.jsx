import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Card = ({card}) => {
    const {product_title, product_image, price, product_id} = card;
    return (
        <div>

            <div className="card bg-base-100 shadow-xl h-full">
            <figure className="p-4 grow">
                <img
                src={product_image}
                alt="Shoes"
                className="rounded-xl object-contain h-48 w-96 grow" />
            </figure>
            <div className="card-body justify-start items-start text-left ">
                <h2 className="card-title grow">{product_title}</h2>
                <p className="my-2">Price: {price}$ </p>
                <div className="card-actions grow">
                <NavLink to={`/product/${product_id}`} className={`btn bg-transparent text-[#9538E2] border-[#9538E2] rounded-full font-semibold `}>View Details</NavLink>
                </div>
            </div>
            </div>
            
        </div>
    );
};

Card.propTypes = {
    card : PropTypes.object,
}

export default Card;