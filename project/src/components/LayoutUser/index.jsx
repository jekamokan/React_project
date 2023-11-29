import { NavLink, Outlet, useNavigate } from "react-router-dom"
import './style.css'
import { useDispatch } from "react-redux"
import { logOutAC } from "../../redux/reducers/userReducer"
const LayoutUser = ({ setAuthorizationVisible }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOut = () => {
        dispatch(logOutAC())
        setAuthorizationVisible(true)
        navigate('/')
    }
    return (
        <div className="language">
            <ul className="language__nav">
                <li><NavLink to={'MyInfo'} >Мій кабінет</NavLink></li>
                <li><NavLink to={'PersonalOffers'}>Персональні пропозиції</NavLink></li>
                <li>
                    <button
                        onClick={logOut}>
                        Вийти
                    </button>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
export default LayoutUser