import Authorization from "../Authorization"
import './style.css'


const RegistrOrAuth = ({setLoginModalActive, setRegistrationModalActive, authorizationVisible}) => {
    
    
   
        return(
        <>
        <div className="registrorauth">
            <p>Для оформлення покупки вам потрібно авторизуватися або зареєструватися</p>
            <div className="registrorauth__buttons">
            <Authorization setLogin={setLoginModalActive} setRegistration={setRegistrationModalActive} authorizationVisible={authorizationVisible}  />
            </div>
        </div>
        </>
    )

    
}
export default RegistrOrAuth