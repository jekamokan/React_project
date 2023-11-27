
import { useState } from 'react';
import NewProducts from '../NewProducts'
import './style.css'
import RunLine from '../RunLine';
import Categories from '../Categories';
const HomePage = () => {
    const [useFilteredProducts, setUseFilteredProducts] = useState(true);
    return (
        <div className="home">
            <Categories useFilteredProducts={useFilteredProducts} setUseFilteredProducts={setUseFilteredProducts} />
            {useFilteredProducts ? <RunLine/> : null}
            {useFilteredProducts ? <NewProducts /> : null}
        </div>
    )
}
export default HomePage