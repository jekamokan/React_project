import { Link } from "react-router-dom"

const PersonalOffers = () => {
    return (
        <div>
            <h1>Ops!</h1>
            <p>Sorry, an unexpected error has occurred</p>
            <Link to={'/'}>Click here for comeback</Link>
            <p>Or </p>
            <a href='https://www.youtube.com/watch?v=tpiyEe_CqB4&ab_channel=Rufus' target='_blank' rel="noreferrer">Click here if you want to see cute cats</a>
        </div>
    )
}
export default PersonalOffers