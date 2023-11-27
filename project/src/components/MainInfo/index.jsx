import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from './../../images/slide1.jpg';
import slide2 from './../../images/slide2.jpg';
import slide3 from './../../images/slide3.jpg';
import slide4 from './../../images/slide4.jpg';
import './style.css';

const MainInfo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  }
  return (
    <div className="maininfo">
      <Slider {...settings}>
      <div >
        <img src={slide1} alt="slide1" />
      </div>
      <div >
      <img src={slide2} alt="slide2" />
      </div>
      <div >
      <img src={slide3} alt="slide3" />
      </div>
      <div >
      <img src={slide4} alt="slide4" />
      </div>
    </Slider>
    </div>
  )
}

export default MainInfo