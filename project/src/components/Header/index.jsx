import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "../HomePage";
import Layout from "../Navigation";
import Products from "../Products";
import { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { getProductsAC } from "../../redux/reducers/productsReducer";
import ScrollButton from "../ScrollButton";
import { getCategoriesAC } from "../../redux/reducers/categoriesReducer";
import { getLimitProductsAC } from "../../redux/reducers/limitProductReducer";
import SingleProduct from "../SingleProduct";
import User from "../User";
import Cart from "../Cart";
import './style.css';



const Header = () => {
  const [authorizationVisible, setAuthorizationVisible] = useState(true);
  const [userVisible, setUserVisible] = useState(false);
  const [registrationModalActive, setRegistrationModalActive] = useState(false)
  const toggleAuthorizationAndUser = () => {
    setAuthorizationVisible(false);
    setUserVisible(true);
  };


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout
      authorizationVisible={authorizationVisible}
      userVisible={userVisible}
      toggleAuthorizationAndUser={toggleAuthorizationAndUser}
      registrationModalActive={registrationModalActive}
      setRegistrationModalActive={setRegistrationModalActive} />} >
      <Route index element={<HomePage />} />
      <Route path="Products" element={<Products />} />
      <Route path="Products/:id" element={<SingleProduct />} />
      <Route path="User/*" element={<User
        setAuthorizationVisible={setAuthorizationVisible}/>} />
      <Route path="Cart" element={<Cart
        authorizationVisible={authorizationVisible}
        toggleAuthorizationAndUser={toggleAuthorizationAndUser}
        registrationModalActive={registrationModalActive}
        setRegistrationModalActive={setRegistrationModalActive} />} />
    </Route>
  ))



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAC())
    dispatch(getLimitProductsAC())
    dispatch(getCategoriesAC())
});
  return (
    <div className="header">
      <RouterProvider router={router} />
      <ScrollButton />
    </div>

  )
}
export default Header

