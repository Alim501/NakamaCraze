import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function Characters() {
  return (
    <>
    <div className='bg-lightWhite'>
      <h1 className='text-center font-weight-bold section design pt-3'>DESIGN</h1>
      <Carousel variant="dark" className='pt-sm-0 py-3' indicators={false}>
       
        {['Misato', 'Misa', 'Mai', 'Lucy'].map((character) => (
          <Carousel.Item key={character}>
            <picture>
              <source media="(max-width:576px)" srcSet={require(`../Assets/Characters/${character}-sm.png`)}></source>
              <source media="(min-width:2000px)" srcSet={require(`../Assets/Characters/${character}-lg.png`)}></source>
              <Image fluid
                className="d-block w-100 border-white"
                src={require(`../Assets/Characters/${character}.png`)}
                alt={character}
              />
            </picture>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </>
  );
}

export default Characters;