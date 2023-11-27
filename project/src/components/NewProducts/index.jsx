import { useSelector } from "react-redux"
import ProductCard from "../ProductCard";
import './style.css'

const NewProducts = () => {
    const products = useSelector(store => store.products.data)
    const firstFiveProducts = products.slice(0, 5);
    return (
        <div className="newproducts">
            <p className="newproducts__title">Новинки</p>
            <div className="newproducts__content">
            {firstFiveProducts.length !== 0 ? (firstFiveProducts.map((el, index) => (
                <ProductCard
                    id={el._id}
                    name={el.name}
                    price={el.price}
                    description={el.description}
                    key={index}
                    arrImg={el.images} />
            ))) : (null)}
            </div>

            
        </div>

    )
}

export default NewProducts