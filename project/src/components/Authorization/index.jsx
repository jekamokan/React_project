import './style.css'
const Authorization = ({ setLogin, setRegistration, authorizationVisible }) => {

    if (authorizationVisible) {
        return (
            <div className="authorization">
                <button onClick={() => setLogin(true)}>
                    Авторизація
                </button>
                <button onClick={() => setRegistration(true)}>
                    Реєстрація
                </button>
                
            </div>
        )
    }

}
export default Authorization