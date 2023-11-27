import { useSelector } from "react-redux"
import ProductCard from "../ProductCard"
import './style.css'
import Skeletons from "../Skeleton"
import { useEffect, useState } from "react"
import BasicPagination from "../BasicPagination"

const Products = () => {
   const limitProducts = useSelector(store => store.limitProducts.data)
  const skeletonsArray = Array(20).fill(null);
  const [newListCategories, setNewListCategories] = useState([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {getAllProducts()},[limitProducts])


  const getAllProducts = () => {
    if (Array.isArray(limitProducts)) {
        const limitProductsList = limitProducts.filter((el) => el.images !== null && el.images.length !== 0 && el.hasOwnProperty("name") && el.price !== 0 );
        setNewListCategories(limitProductsList);

    }
    return [];
}

  return (
    <div className="products">
      <div className="products__title">
        <p>Товари</p>
      </div>
      <div className="products__wrapper">
        {newListCategories.length === 0 ? (
          skeletonsArray.map((_, index) => (
            <Skeletons key={index} />
          ))
        ) : (
          newListCategories.map((el, index) => (
            <ProductCard
              id={el._id}
              name={el.name}
              price={el.price}
              description={el.description}
              key={index}
              arrImg={el.images}
            />
          ))
        )}
      </div>
      <div className="products__pagination">
        <BasicPagination/>
      </div>
    </div>
  )
}
export default Products