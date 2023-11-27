import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLimitProductsAC } from '../../redux/reducers/limitProductReducer';

const BasicPagination = () => {
    const products = useSelector(store => store.products.data)
    const limitProducts = useSelector(store => store.limitProducts.data)
    const [skipPage, setSkipPage] = useState({
        limit: 20,
        skip: 0
    })
    const dispatch = useDispatch()
    const count = limitProducts.length > 0 ? Math.ceil(products.length / limitProducts.length) : "...";

    const handleChange = (e, p) => {
        let skip = (p - 1) * skipPage.limit; 
        setSkipPage({ ...skipPage, skip });
        dispatch(getLimitProductsAC(skipPage.limit, skip));
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });    
    }
    useEffect(() => {
        const defaultSkipPage = {
            limit: 20,
            skip: 0
        };

        dispatch(getLimitProductsAC(defaultSkipPage.limit, defaultSkipPage.skip));

        return () => {
            setSkipPage(defaultSkipPage);
        };
    }, [dispatch]);

  return (
      <Pagination count={count} color="secondary" onChange={handleChange}/>

      
  );
}
export default BasicPagination
