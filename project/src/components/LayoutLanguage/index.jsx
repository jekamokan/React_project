import { Link, Outlet } from "react-router-dom"
import './style.css'
const LayoutLanguage = () => {
    return (
        <div className="language">
            <p className="language__title"> Choose language</p>
            <Link to={'NotFoundPageUa'} >Українська</Link>
            <Link to={'NotFoundPageEng'}>Англійська</Link>
            <Link to={'NotFoundPageRu'}>Російська</Link>
            <Outlet/>
        </div>
    )
}
export default LayoutLanguage