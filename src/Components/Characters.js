import Carousel from 'react-bootstrap/Carousel';
import Misato from "../Characters/Misato.png"
import Misa from "../Characters/Misa.png"
import Mai from "../Characters/Mai.png"
import Lucy from "../Characters/Lucy.png"
import Misato_lg from "../Characters/Misato-lg.png"
import Misa_lg from "../Characters/Misa-lg.png"
import Mai_lg from "../Characters/Mai-lg.png"
import Lucy_lg from "../Characters/Lucy-lg.png"

function Characters() {
  return (
    <div className='bg-lightWhite'>
        <h1 className='text-center font-weight-bold section design pt-3'>DESIGN</h1>
    <Carousel variant="dark" indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 border-white"
          src={Misato_lg}
          srcSet={`${Misato} 1920w, ${Misato_lg} 2000w`}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 border-white"
          src={Misa_lg}
          srcSet={`${Misa} 1920w, ${Misa_lg} 2000w`}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 border-white"
          src={Mai_lg}
          srcSet={`${Mai} 1920w, ${Mai_lg} 2000w`}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 border-white"
          src={Lucy_lg}
          srcSet={`${Lucy} 1920w, ${Lucy_lg} 2000w`}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Characters;