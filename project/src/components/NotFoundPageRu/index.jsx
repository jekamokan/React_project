import { Link } from "react-router-dom"


const NotFoundPageRu = () => {
    return (
        <div>
            <h1>Оеей!</h1>
            <p>Извините, произошла непредвиденная ошибка</p>
            <Link to={'/'}>Нажмите сюда, что бы вернуться на главный экран</Link>
            <p>Или </p>
            <a href='https://www.youtube.com/watch?v=tpiyEe_CqB4&ab_channel=Rufus' target='_blank' rel="noreferrer">Нажмите сюда, если хотите посмотреть на котиков</a>
        </div>
    )
}
export default NotFoundPageRu