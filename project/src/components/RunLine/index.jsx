import Marquee from 'react-fast-marquee';
import one from '../../images/runLine/one.png'
import two from '../../images/runLine/two.png'
import three from '../../images/runLine/three.png'
import four from '../../images/runLine/four.png'
import five from '../../images/runLine/five.png'
import six from '../../images/runLine/six.png'
import seven from '../../images/runLine/seven.png'
import eight from '../../images/runLine/eight.png'
import nine from '../../images/runLine/nine.png'
import ten from '../../images/runLine/ten.png'
import './style.css'
const RunLine = () => {

    return (
        <div className='runline' >
            <Marquee direction="right" gradient = {true} >
                {/* <div className='runline__wrapper'> */}
                    <div className='runline__box'>
                        <img src={one} alt="one" />
                    </div>
                    <div className='runline__box'>
                        <img src={two} alt="two" />
                    </div>
                    <div className='runline__box'>
                        <img src={three} alt="three" />
                    </div>
                    <div className='runline__box'>
                        <img src={four} alt="four" />
                    </div>
                    <div className='runline__box'>
                        <img src={five} alt="longines" />
                    </div>
                    <div className='runline__box'>
                        <img src={six} alt="six" />
                    </div>
                    <div className='runline__box'>
                        <img src={seven} alt="seven" />
                    </div>
                    <div className='runline__box'>
                        <img src={eight} alt="eight" />
                    </div>
                    <div className='runline__box'>
                        <img src={nine} alt="nine" />
                    </div>
                    <div className='runline__box'>
                        <img src={ten} alt="ten" />
                    </div>
                    {/* </div> */}
            </Marquee>
        </div>
    )
}
export default RunLine