import { Container, Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import before from "../1.png"
import after from "../2.png"
import price from "../price.png"

function Goods2() {
    return (
        <>
            <div id="catalog" >
                <h1 className='text-center bg-yellow section py-sm-3'>ШМОТ</h1>
                {Goods.map((Good)=>(
                    <div>
                <Container fluid className="py-4 pt-sm-5 pb-sm-0">
                    <Row>
                        <Col sm={7}>
                            <Carousel interval={null} controls={false}>
                            {Good.images.map((image)=>(
                                <Carousel.Item className="fadex">
                                    <picture>
                                        <source media="(max-width:576px)" srcSet={require(`../Colors/${image}-sm.png`)}></source>
                                        <Image fluid
                                            className="d-block w-100"
                                            src={require(`../Colors/${image}.png`)}
                                            alt={image}
                                        />
                                    </picture>
                                </Carousel.Item>
                                ))}
                                
                            </Carousel>
                        </Col>
                        <Col className="text-center pb-sm-5 pb-4 d-grid" sm={5}>
                            <div>
                                <h1 className="text-yellow m-0 RoadRadio">{Good.title}</h1>
                                <div className="text-white mb-sm-4 pb-sm-2 h4 title">{Good.anime}</div>
                                <div className="border-top d-flex border-bottom py-2 mb-2 align-items-center justify-content-center">
                                {['red','green','pink','white','black'].map((color)=>(
                                    <div>
                                <input type="radio" className="btn-check" name="misato_color" id={Good.name + color} autoComplete="off" />
                                <label className={`color ${color} shadow mx-1`} for={Good.name + color}></label>
                                </div>
                                ))}
                                    <h2 className="text-white border-right pe-1 px-sm-2 my-2 RoadRadio">S</h2>
                                    <h2 className="text-white border-right px-1  px-sm-2 my-2 RoadRadio">M</h2>
                                    <h2 className="text-white ps-1 px-sm-2 my-2 RoadRadio">L</h2>
                                </div>
                                <div className="d-flex px-sm-3 py-2 py-sm-3 justify-content-center">
                                    <img className="quote" alt="before" src={before} />
                                    <p className="text-white pt-3 align-items-center d-flex">{Good.phrase}</p>
                                    <img className="quote mt-5" alt="after" src={after} />
                                </div>
                            </div>
                            <Image
                                className="align-self-end mx-auto button-img pt-2 pt-sm-0"
                                src={price}
                            />
                        </Col>
                    </Row>
                </Container >
                <div className="slicer"></div>
                </div>
                ))}
            </div >
        </>
    );
}
const Goods=[
{
    name: 'Misato',
    images: ['Misato/MisatoPink', 'Misato/MisatoGreen', 'Misato/MisatoRed', 'Misato/MisatoWhite', 'Misato/MisatoBlack'],
    title: 'HOODIE "MISATO"',
    anime: 'EVANGELION',
    phrase: 'ЭТО ВЗРОСЛЫЙ ПОЦЕЛУЙ, ОСТАЛЬНОЕ БУДЕТ КОГДА ВЕРНЕШЬСЯ'
},
{
    name: 'Misa',
    images: ['Misa/MisaPink', 'Misa/MisaGreen', 'Misa/MisaRed', 'Misa/MisaWhite', 'Misa/MisaBlack'],
    title: 'HOODIE "MISA"',
    anime: 'DEATH NOTE',
    phrase: 'СМЕРТЬ? КАКАЯ ПРЕЛЕСТЬ!'
},
{
    name: 'Lucy',
    images: ['Lucy/LucyPink', 'Lucy/LucyGreen', 'Lucy/LucyRed', 'Lucy/LucyWhite', 'Lucy/LucyBlack'],
    title: 'HOODIE "LUCY"',
    anime: 'CYBERPUNK: EDGERUNNERS',
    phrase: 'ТЕБЕ НИКОГДА НЕ НУЖНО БЫЛО СПАСАТЬ МЕНЯ'
}
]

export default Goods2;