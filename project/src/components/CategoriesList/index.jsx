import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SkeletonCategories from "../SkeletonsCategories/indes";


const CategoriesList = ({ createProductsList, activeButton, setUseFilteredProducts, setActiveButton}) => {
    const products = useSelector(store => store.products.data)
    const categories = useSelector(store => store.categories.data)
    const [newFilteredArray, setNewFilteredArr] = useState([])
    const skeletonsForCategories = Array(20).fill(null);
   
    const allCategories = () => {
        if (Array.isArray(categories) && Array.isArray(products)) {
            const filteredArray = categories.filter(el1 =>
                products.some(el2 => el2.categories && el2.categories.length > 0 && el2.categories[0]._id === el1._id)
            );
            setNewFilteredArr(filteredArray);
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => allCategories(), [categories, products]);
    
     const changeCondition = () => {
        setUseFilteredProducts(true)
        setActiveButton("All products")
     }

    return (
        <div className="categories__btn-wrapper">
            <button
                onClick={changeCondition}
                className={activeButton === "All products" ? "categories__active categories__btn" : " categories__btn"}
            >
                Акційні товари
            </button>
            {newFilteredArray.length === 0 ? (
                skeletonsForCategories.map((_, index) => (
                    <SkeletonCategories key={index} />
                ))
            ) : (
                newFilteredArray.map((el, index) => (
                    <button
                        key={index}
                        id={el._id}
                        onClick={() => createProductsList(el._id, el.name)}
                        className={activeButton === el.name ? "categories__active categories__btn" : "categories__btn"}
                    >
                        {el.name}
                    </button>
                ))
            )}
        </div>
    )
}

export default CategoriesList