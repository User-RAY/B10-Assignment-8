import PropTypes from "prop-types";
import Category from "../Category/Category";




const Categories = ({categories}) => {
    return (
        <>
            <ul className="flex flex-col justify-center items-stretch h-full">
            {
                categories.map(category => (
                 <Category key={category.category} category={category}></Category>
            ))
            }
            </ul>
            
        </>
    );
};

Categories.propTypes = {
    categories : PropTypes.array,
}

export default Categories;