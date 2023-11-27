import { Link, NavLink, Outlet } from 'react-router-dom';
import image from './../../images/kiber-logo.png'
import Authorization from '../Authorization';
import Modal from '../Modal';
import { useState } from 'react';
import Registration from '../Authorization/Registration';
import './style.css'
import { useSelector } from 'react-redux';
import Login from '../Authorization/Login';




const Layout = ({ userVisible, authorizationVisible, toggleAuthorizationAndUser, registrationModalActive, setRegistrationModalActive }) => {
  const [loginModalActive, setLoginModalActive] = useState(false)
  const userData = useSelector(state => state.user)
  const cartData = useSelector(store => store.cart.data)
  let fullCount = 0
  cartData.forEach((element) => {
    fullCount += element.quantity
  })

  return (
    < >
      <div className='navigation'>
        <div className='navigation__wrapper'>
          <Link to={'/'}>
            <img src={image} alt="logo" />
          </Link>
          <ul className='navigation__list'>
            <li><NavLink to={"/"} > Головна</NavLink></li>
            <li><NavLink to={'/Products'}>Товари</NavLink></li>
            <li><NavLink to={'/Cheesecakes'}>Cheesecakes</NavLink></li>
            <li><NavLink to={'/Cakes'}>Cakes</NavLink></li>
          </ul>
          <Authorization setLogin={setLoginModalActive} setRegistration={setRegistrationModalActive} authorizationVisible={authorizationVisible} />
          <div className='navigation__user'>
            <div className={userVisible ? 'navigation__item-active' : 'navigation__item'}>
            <NavLink to={'/User'}>{userData.login}</NavLink>
            </div>
            <Link to={'/Cart'}>
              <div className='navigation__cart'><span className='navigation__cart-count'>{fullCount}</span></div>
            </Link>
          </div>
        </div>
      </div>
      <Modal active={loginModalActive} setActive={setLoginModalActive} children={<Login toggleAuthorizationAndUser={toggleAuthorizationAndUser} setActive={setLoginModalActive} setRegistrationModalActive={setRegistrationModalActive}/>} />
      <Modal active={registrationModalActive} setActive={setRegistrationModalActive} children={<Registration setActive={setRegistrationModalActive} />} />
      <Outlet />
    </>
  )
}

export default Layout;
