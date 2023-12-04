import { useState } from "react";
import { useDispatch } from 'react-redux';
import InputWithLabel from "../../InputWithLabel";

import './style.css'

import { createId } from "../../../utils";
import { getTokenAC2 } from "../../../redux/reducers/userReducer";


const Registration = ({setActive}) => {
    const [userInfo, setUserInfo] = useState({
        login: '',
        email: '',
        password: ''
      })
      const dispatch = useDispatch();
      
      const handleUpdateUser = (field, value) => {
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          [field]: value
        }));
      };
      // const handleUpdateUserName = (value) => {
      //   setUserInfo({...userInfo, login: value})
      // }
      // const handleUpdateUserEmail = (value) => {
      //   setUserInfo({...userInfo, email: value})
      // }
      // const handleUpdateUserPassword = (value) => {
      //   setUserInfo({...userInfo, password: value})
      // }
      //////// переделать
      const handlePushUserData = () => {
        dispatch(getTokenAC2(userInfo))
        setActive(false)
        
      }
    return (
        <div className="registration">
          <p>Форма реєстрації</p>
            <InputWithLabel hash={createId[0]} onChange={(value) => handleUpdateUser('login', value)} placeholder="Ваше ім'я" type='name'/>
            <InputWithLabel hash={createId[1]} onChange={(value) => handleUpdateUser('email', value)} placeholder="Ваша електронна адреса" type='email'/>
            <InputWithLabel hash={createId[2]} onChange={(value) => handleUpdateUser('password', value)} placeholder="Ваш пароль" type='password'/>
            <button onClick={handlePushUserData}>Зареєструватися</button>
        </div>
    )
}
export default Registration