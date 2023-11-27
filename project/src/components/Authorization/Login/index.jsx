import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';
import { createId } from '../../../utils';
import {
  getTokenAC,
} from '../../../redux/reducers/userReducer';

const Login = ({ toggleAuthorizationAndUser,setActive,}) => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    login: '',
    password: '',
  });
  //////
  const handelUpdateLogin = (e) => {
    setUserInfo({ ...userInfo, login: e.target.value });
  };
  const handelUpdatePassword = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  useEffect(() => {
    if (userData.isLoggedIn) {
        toggleAuthorizationAndUser();
        setActive(false);
        // notify();
      }
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);
 
  const handleGetToken = () => {
    dispatch(getTokenAC(userInfo));
  };

  return (
    <div className={userData.isLoggedIn ? 'login shake' : 'login'}>
      <div className='login__wrapper'>
        <div className='login__content'>
          <label htmlFor={createId[3]}>Name</label>
          <input
            id={createId[3]}
            type='text'
            onChange={handelUpdateLogin}
            placeholder="Ваше ім'я"
          />
        </div>
        <div className='login__content'>
          <label htmlFor={createId[4]}>Password</label>
          <input
            id={createId[4]}
            type='password'
            onChange={handelUpdatePassword}
            placeholder='Ваш пароль'
          />
        </div>
        <button onClick={handleGetToken}>Увійти</button>
        {/* {!userData.isLoggedIn && (
          <>
            <p>Введіть правильний логін та пароль, або зареєструйтесь</p>
            <button onClick={() => setRegistrationModalActive(true)}>
              Реєстрація
            </button>
          </>
        )} */}
      </div>
    </div>
  );
};
export default Login;
