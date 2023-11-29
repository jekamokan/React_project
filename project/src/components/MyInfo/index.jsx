import { Link } from "react-router-dom"

const MyInfo = () => {
    return (
        <div>
            <h1>От халепа!</h1>
            <p>Вибачте, сталася несподівана помилка.</p>
            <Link to={'/'}>Натисніть сюди, щоб повернутися на головну сторінку</Link>
            <p>Або </p>
            <a href='https://www.youtube.com/watch?v=tpiyEe_CqB4&ab_channel=Rufus' target='_blank' rel="noreferrer" >Натисніть сюди, якщо хочете подивитися на котиків</a>
        </div>
    )
}
export default MyInfo