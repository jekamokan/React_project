import './style.css'
import bin from './../../images/recycle-bin.png'
import { useDispatch} from 'react-redux'
import { addProductInCart, removeFromCart, removeProductInCart } from '../../redux/reducers/cartReducer'

const Order = ({ name, price, id, arrImg, quantity,totalPrice }) => {
  // const cartData = useSelector(store => store.cart.data);
  
  const getImageUrl = (arrImg) => {
    if (Array.isArray(arrImg) && arrImg.length > 0) {
      const randomIMG = Math.floor(Math.random() * arrImg.length);
      if (arrImg[randomIMG] && arrImg[randomIMG].url) {
          return 'http://shop-roles.node.ed.asmer.org.ua/' + arrImg[0].url;
      }
  }
}
  const dispatch = useDispatch();
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const addProduct = () => {
    dispatch(addProductInCart(id, 1))
  }
  const removeProduct = () => {
    dispatch(removeProductInCart(id, 1))
  }

  return (
    <li className="order" id={id}>
      <img className="order__img" src={getImageUrl(arrImg)} alt="img" />
      <p className="order__name">{name}</p>
      <div className='order__count'>
        <button 
        onClick={removeProduct}
        disabled={quantity === 1}
        >-</button>
        <span>{quantity}</span>
        <button onClick={addProduct}>+</button>
      </div>
      <p className="order__price">{totalPrice} грн.</p>
      <img className='order__bin' src={bin} alt="bin" onClick={() => handleRemoveFromCart(id)} />
    </li>
  )
}
export default Order

