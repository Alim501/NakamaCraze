import { Container, Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import before from "../1.png"
import after from "../2.png"
import MisatoPink from "../Colors/Misato/MisatoPink.png"
import price from "../price.png"
import MisatoGreen from "../Colors/Misato/MisatoGreen.png"
import MisatoRed from "../Colors/Misato/MisatoRed.png"
import MisatoWhite from "../Colors/Misato/MisatoWhite.png"
import MisatoBlack from "../Colors/Misato/MisatoBlack.png"
import MisatoPink_sm from "../Colors/Misato/MisatoPink-sm.png"
import MisatoGreen_sm from "../Colors/Misato/MisatoGreen-sm.png"
import MisatoRed_sm from "../Colors/Misato/MisatoRed-sm.png"
import MisatoWhite_sm from "../Colors/Misato/MisatoWhite-sm.png"
import MisatoBlack_sm from "../Colors/Misato/MisatoBlack-sm.png"

function Goods() {
    return (
        <div id="catalog">
            <h1 className='text-center bg-yellow section py-sm-3'>ШМОТ</h1>
            <Container fluid className="py-4 pt-sm-5 pb-sm-0">
                <Row>
                    <Col sm={7}>
                        <Carousel interval={null} controls={false}>
                            <Carousel.Item className="fadex">
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MisatoPink_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MisatoPink}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MisatoGreen_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MisatoGreen}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MisatoRed_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MisatoRed}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item>
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MisatoWhite_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MisatoWhite}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MisatoBlack_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MisatoBlack}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className="text-center pb-sm-5 pb-4 d-grid" sm={5}>
                        <div>
                            <h1 className="text-yellow m-0 RoadRadio">HOODIE "MISATO"</h1>
                            <div className="text-white mb-sm-4 pb-sm-2 h4 title">EVANGELION</div>
                            <div className="border-top d-flex border-bottom py-2 mb-2 align-items-center justify-content-center">
                                <input type="radio" className="btn-check" name="misato_color" id="misato_option1" autoComplete="off" />
                                <label className=" color red shadow mx-1" for="misato_option1"></label>

                                <input type="radio" className="btn-check" name="misato_color" id="misato_option2" autoComplete="off" />
                                <label className=" color green shadow " for="misato_option2"></label>

                                <input type="radio" className="btn-check" name="misato_color" id="misato_option3" autoComplete="off" />
                                <label className=" color pink shadow mx-1" for="misato_option3"></label>

                                <input type="radio" className="btn-check" name="misato_color" id="misato_option4" autoComplete="off" />
                                <label className=" color white shadow " for="misato_option4"></label>

                                <input type="radio" className="btn-check" name="misato_color" id="misato_option5" autoComplete="off" />
                                <label className=" color black shadow mx-1" for="misato_option5"></label>
                                <h2 className="text-white border-right pe-1 px-sm-2 my-2 RoadRadio">S</h2>
                                <h2 className="text-white border-right px-1  px-sm-2 my-2 RoadRadio">M</h2>
                                <h2 className="text-white ps-1 px-sm-2 my-2 RoadRadio">L</h2>
                            </div>
                            <div className="d-flex px-sm-3 py-2 py-sm-3 justify-content-center">
                                <img className="quote" alt="before" src={before} />
                                <p className="text-white pt-3 align-items-center d-flex">ЭТО ВЗРОСЛЫЙ ПОЦЕЛУЙ, ОСТАЛЬНОЕ БУДЕТ КОГДА ВЕРНЕШЬСЯ</p>
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
        </div >
    );
}

export default Goods;