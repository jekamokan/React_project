import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer__wrapper'>
                <div className="footer__catalog">
                    <h3 className='footer__title'>Каталог</h3>
                    <ul className='footer__list'>
                        <li>Товары 1</li>
                        <li>Товары 2</li>
                        <li>Товары 3</li>
                        <li>Товары 4</li>
                    </ul>
                </div>
                <div className="footer__contacts">
                    <h3 className='footer__title'>Контакты</h3>
                    <ul className='footer__list'>
                        <li>Город Харьков</li>
                        <li>+3800000000</li>
                        <li>shop-online@ukr.net</li>
                        <li>ПН-ПТ 10:00-19:00</li>
                    </ul>
                </div>
                <div className="footer__social">
                    <h3 className='footer__title'>Социальные сети</h3>
                    <ul className='footer__list'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
