import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';
import './style.css'

const SingleProduct = () => {
    // Используйте useParams для извлечения значения параметра из URL
    const { id } = useParams();
    const products = useSelector(store => store.products.data);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        if (Array.isArray(products)) {
            const foundProduct = products.find(product => product._id === id);

            // Если продукт найден, вывести его в консоль
            if (foundProduct) {
                setSelectedProduct(foundProduct);
            
            }
        }
    }, [id, products]);

    return (
        <div className='singleproduct'>
            {selectedProduct && (
                <ProductCard
                    id={selectedProduct._id}
                    name={selectedProduct.name}
                    price={selectedProduct.price}
                    description={selectedProduct.description}
                    key={selectedProduct._id}
                    arrImg={selectedProduct.images}
                />
            )}

        </div>
    );
};

export default SingleProduct;
