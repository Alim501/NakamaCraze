import Carousel from 'react-bootstrap/Carousel';
import Misato from "../Characters/Misato.png"
import Misa from "../Characters/Misa.png"
import Mai from "../Characters/Mai.png"
import Lucy from "../Characters/Lucy.png"
import Misato_lg from "../Characters/Misato-lg.png"
import Misa_lg from "../Characters/Misa-lg.png"
import Mai_lg from "../Characters/Mai-lg.png"
import Lucy_lg from "../Characters/Lucy-lg.png"
import Misato_sm from "../Characters/Misato-sm.png"
import Misa_sm from "../Characters/Misa-sm.png"
import Mai_sm from "../Characters/Mai-sm.png"
import Lucy_sm from "../Characters/Lucy-sm.png"
import { Image } from 'react-bootstrap';

function Characters() {
  return (
    <div className='bg-lightWhite'>
      <h1 className='text-center font-weight-bold section design pt-3'>DESIGN</h1>
      <Carousel variant="dark" className='pt-sm-0 py-3' indicators={false}>
        <Carousel.Item>
          <picture>
            <source media="(max-width:576px)" srcSet={Misato_sm}></source>
            <source media="(min-width:2000px)" srcSet={Misato_lg}></source>
            <Image fluid
              className="d-block w-100 border-white"
              src={Misato}
              alt="First slide"
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source media="(max-width:576px)" srcSet={Misa_sm}></source>
            <source media="(min-width:2000px)" srcSet={Misa_lg}></source>
            <Image fluid
              className="d-block w-100 border-white"
              src={Misa}
              alt="First slide"
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source media="(max-width:576px)" srcSet={Mai_sm}></source>
            <source media="(min-width:2000px)" srcSet={Mai_lg}></source>
            <Image fluid
              className="d-block w-100 border-white"
              src={Mai}
              alt="First slide"
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source media="(max-width:576px)" srcSet={Lucy_sm}></source>
            <source media="(min-width:2000px)" srcSet={Lucy_lg}></source>
            <Image fluid
              className="d-block w-100 border-white"
              src={Lucy}
              alt="First slide"
            />
          </picture>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Characters;