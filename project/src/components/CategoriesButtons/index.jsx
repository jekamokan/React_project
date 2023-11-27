import { useState } from "react"
import cross from './../../images/cross.png'
import { useNavigate } from "react-router-dom";

const CategoriesButtons = ({ sortProductsByPrice, value, setValue, filteredProducts, products, GlobalFilteredProducts,setUseFilteredProducts }) => {
    const [isOpen, setIsOpen] = useState(true)
    const navigate = useNavigate();

    const handleItemClick = (product) => {
        // const selectedValue = product.target.textContent;
        // const selectedValue = product.name;
        setValue(product.name);
        setIsOpen(false);
        setUseFilteredProducts(false)
        navigate(`/Products/${product._id}`);
        // setListCategorie(filteredProducts);
    }
    const handelInputClick = () => {
        setIsOpen(true)
        setValue('')
    }

    const resetFilter = () => setValue('')


    return (
        <div className="categories__content-buttons">
            <div className="categories__content-btn">
                <button onClick={() => sortProductsByPrice(true)}>Від дешевих до дорожчогих</button>
                <button onClick={() => sortProductsByPrice(false)}>Від дорожчогих до дешевих</button>
            </div>
            <div className="categories__content-search">
                <input
                    type="text"
                    placeholder="Введіть назву товару"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onClick={handelInputClick}
                />
                <ul className="categories__list">
                    {
                        value && isOpen ? GlobalFilteredProducts.map((product, index) => {
                            return (
                                <li
                                    className="categories__item"
                                    key={index}
                                    onClick={() => handleItemClick(product)}
                                >
                                    {product.name}
                                </li>
                            )
                        }) : null
                    }
                </ul>
                {/* <img src={cross} alt="cross" onClick={resetFilter} /> */}
                <img src={cross} alt="cross" onClick={resetFilter} />
            </div>
        </div>
    )
}

export default CategoriesButtons