import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import './Category.css';
PropTypes
const Category = ({category}) => {
    return (
        <div>


            <li className=" my-2 "><NavLink to={`category/${category.category}`} className={`btn rounded-full w-5/6 text-xs md:text-base text-left text-[#09080F]/[.6]`}>{category.category}</NavLink></li>

            
        </div>
    );
};

Category.propTypes = {
    category : PropTypes.object,
}

export default Category;