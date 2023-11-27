import { useSelector } from "react-redux"
import './style.css'
import { useState } from "react";
import CategoriesList from "../CategoriesList";
import CategoriesButtons from "../CategoriesButtons";
import CategoriesCards from "../CategoriesCards";
import MainInfo from "../MainInfo";

const Categories = ({useFilteredProducts, setUseFilteredProducts}) => {
    const products = useSelector(store => store.products.data) || [];
    const [listCategorie, setListCategorie] = useState([])
    const [activeButton, setActiveButton] = useState("All products");
    const [value, setValue] = useState('')

    const createProductsList = (categorieId, categorieName) => {
        const currentIndex = 0
        if (Array.isArray(products)) {
            const filteredList = products.filter(el => el.categories && el.categories[currentIndex]?.hasOwnProperty("_id") && el.categories[currentIndex]._id === categorieId); // проверяем на id
            setListCategorie(filteredList);
            setActiveButton(categorieName);
            setValue('')
            setUseFilteredProducts(false)
        }
    }

    

    const sortProductsByPrice = (count) => {
        if (Array.isArray(listCategorie)) {
            const sortedListCategorie = [...listCategorie]; // Создаем копию массива
            sortedListCategorie.sort((a, b) => (count ? a.price - b.price : b.price - a.price));
            setListCategorie(sortedListCategorie); // Обновляем состояние с отсортированным массивом
        }
    }

    const GlobalFilteredProducts = products.filter(product => {
        return product.name && product.name.toLowerCase().includes((value || '').toLowerCase());
    });
   


    return (
        <>
            {/* <div className="products__title">
                <p>Товари</p>
            </div> */}
            <div className="categories">
                <CategoriesList createProductsList={createProductsList} activeButton={activeButton} setUseFilteredProducts={setUseFilteredProducts} setActiveButton={setActiveButton}/>
                <div className="categories__content">
                    <CategoriesButtons value={value} setValue={setValue} sortProductsByPrice={sortProductsByPrice}  products={products} GlobalFilteredProducts={GlobalFilteredProducts} setUseFilteredProducts={setUseFilteredProducts}/>
                    {/* {useFilteredProducts ? <MainInfo/> : <CategoriesCards data={useFilteredProducts ? filteredProducts : limitProducts} />} */}
                    {useFilteredProducts ? <MainInfo/> : <CategoriesCards data={listCategorie} setActiveButton={setActiveButton}/>}
                    
                    
                    {/* <BasicPagination setActiveButton={setActiveButton} /> */}
                </div>

            </div>
        </>
    )
}
export default Categories