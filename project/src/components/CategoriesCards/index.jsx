import ProductCard from "../ProductCard"
import Skeletons from "../Skeleton"
import BasicPagination from "../BasicPagination";


const CategoriesCards = ({data, setActiveButton}) => {
    const skeletonsForProducts = Array(20).fill(null);
    return (
        <>
        <div className="categories__content-cards">
            {data.length === 0 ? (
                skeletonsForProducts.map((_, index) => (
                    <Skeletons key={index} />
                ))
            ) : (
                data.map((el, index) => (
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
        {data.length >= 21 ? <BasicPagination setActiveButton={setActiveButton} /> : null}
        </>
    )
}

export default CategoriesCards