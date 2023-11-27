import { Link } from "react-router-dom"
import './style.css'

const ModalForCartWithoutGood = () => {
    return(
        <div className="modalemptycart">
            <p>Ваш кошик пустий, оберіть товар</p>
            <Link to={'/Products'}>
                <button>До товарів</button>
            </Link>
        </div>
    )
}
export default ModalForCartWithoutGood