import { useDispatch, useSelector } from "react-redux";
import Order from "../Order";
import './style.css'
import { useState } from "react";
import Modal from "../Modal";
import RegistrOrAuth from "../RegistrOrAuth";
import ModalForCartWithoutGood from "../ModalForCartWitoutGood";
import Login from "../Authorization/Login"
import Registration from "../Authorization/Registration";
import { sendProductInUser } from "../../redux/reducers/cartReducer";


const Cart = ({authorizationVisible,toggleAuthorizationAndUser, registrationModalActive, setRegistrationModalActive}) => {
  const [registrOrAuthModalActive, setRegistrOrAuthModalActive] = useState(false)
  const [withoutGoodModalActive, setWithoutGoodModalActive] = useState(false)
  const [loginModalActive, setLoginModalActive] = useState(false)
  // const [registrationModalActive, setRegistrationModalActive] = useState(false)
  
  const userData = useSelector(state => state.user)
  const cartData = useSelector(store => store.cart.data)
  const dispatch = useDispatch()
  let fullAmount = 0;
  let fullCount = 0
   cartData.forEach((element) => {
    fullAmount += element.totalPrice
    fullCount += element.quantity
  })

  const buyProducts = () => {
    if(cartData.length === 0){
      setWithoutGoodModalActive(true)
    }else if(userData.isLoggedIn === false){
      setLoginModalActive(true)
    }else if(userData.isLoggedIn === false || userData.token === ''){ // если 1 тру всегда тру
      setRegistrOrAuthModalActive(true)
      }else{
   dispatch(sendProductInUser(cartData))
  }
    
  } 
  return (
    <div className="user">
      <div className="user__title">
        <p>Замовлення</p>
      </div>
      <div className="user__wrapper">
        <ul className="user__list">
          {cartData.map((el, index) => (
            <Order
              name={el.name}
              price={el.price}
              key={index} id={el._id}
              arrImg={el.images}
              quantity={el.quantity}
              totalPrice={el.totalPrice}
            />
          ))}
        </ul>
        <div className="user__info">
          <div className="user__info-count">
            <p>Кількість товарів :</p>
            <div>{fullCount} шт.</div>
          </div>
          <div className="user__info-price">
            <p>Загальна сума :</p>
            <div>{fullAmount} грн.</div>
          </div>
          <button className="user__info-btn" onClick={buyProducts}>Сплатити</button>
        </div>
      </div>
      {authorizationVisible? <Modal active={registrOrAuthModalActive} setActive={setRegistrOrAuthModalActive} children={<RegistrOrAuth setLoginModalActive={setLoginModalActive} setRegistrationModalActive={setRegistrationModalActive} authorizationVisible={authorizationVisible} />}/> : null}
      <Modal active={withoutGoodModalActive} setActive={setWithoutGoodModalActive} children={<ModalForCartWithoutGood/>}/>
      <Modal active={loginModalActive} setActive={setLoginModalActive} children={<Login toggleAuthorizationAndUser={toggleAuthorizationAndUser} setActive={setLoginModalActive} setRegistrationModalActive={setRegistrationModalActive}/>} />
      <Modal active={registrationModalActive} setActive={setRegistrationModalActive} children={<Registration setActive={setRegistrationModalActive} />} />
      <Modal active={loginModalActive} setActive={setLoginModalActive} children={<Login toggleAuthorizationAndUser={toggleAuthorizationAndUser} setActive={setLoginModalActive} setRegistrationModalActive={setRegistrationModalActive}/>} />
    </div>
  );

};
export default Cart