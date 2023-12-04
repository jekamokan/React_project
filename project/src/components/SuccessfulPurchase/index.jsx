import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetCartAfterSent } from '../../redux/reducers/cartReducer'

const SuccessfulPurchase = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const closeModal = () => {
        navigate('/')
        dispatch(resetCartAfterSent())
    }
    return (
        <div className='successfulpurchase'>
            <p>Дякую за покупку, наш оператор зв'яжеться з Вами при винекненні питань.</p>
            <button onClick={closeModal}>Закрити</button>
        </div>
    )
}

export default SuccessfulPurchase