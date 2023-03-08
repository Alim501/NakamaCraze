import { Container, Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import before from "../1.png"
import after from "../2.png"
import MisaPink from "../Colors/Misa/MisaPink.png"
import price from "../price.png"
import MisaGreen from "../Colors/Misa/MisaGreen.png"
import MisaRed from "../Colors/Misa/MisaRed.png"
import MisaWhite from "../Colors/Misa/MisaWhite.png"
import MisaBlack from "../Colors/Misa/MisaBlack.png"
import MisaPink_sm from "../Colors/Misa/MisaPink-sm.png"
import MisaGreen_sm from "../Colors/Misa/MisaGreen-sm.png"
import MisaRed_sm from "../Colors/Misa/MisaRed-sm.png"
import MisaWhite_sm from "../Colors/Misa/MisaWhite-sm.png"
import MisaBlack_sm from "../Colors/Misa/MisaBlack-sm.png"

function Misa() {
    return (
        <div>
            <div className="slicer"></div>
            <Container fluid className="py-4 pt-sm-5 pb-sm-0">
                <Row>
                    <Col sm={7}>
                        <Carousel interval={null} controls={false}>
                            <Carousel.Item className="fadex">
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MisaBlack_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MisaBlack}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MisaWhite_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MisaWhite}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MisaGreen_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MisaGreen}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item>
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MisaRed_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MisaRed}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MisaPink_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MisaPink}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className="text-center pb-sm-5 pb-4 d-grid" sm={5}>
                        <div>
                            <h1 className="text-yellow m-0 RoadRadio">HOODIE "MISA"</h1>
                            <div className="text-white mb-sm-4 pb-sm-2 h4 title">DEATH NOTE</div>
                            <div className="border-top  d-flex border-bottom py-2 mb-2 align-items-center justify-content-center">

                                <input type="radio" className="btn-check" name="Misa_color" id="Misa_option1" autoComplete="off" />
                                <label className=" color red shadow mx-1" for="Misa_option1"></label>

                                <input type="radio" className="btn-check" name="Misa_color" id="Misa_option2" autoComplete="off" />
                                <label className=" color green shadow " for="Misa_option2"></label>

                                <input type="radio" className="btn-check" name="Misa_color" id="Misa_option3" autoComplete="off" />
                                <label className=" color pink shadow mx-1" for="Misa_option3"></label>

                                <input type="radio" className="btn-check" name="Misa_color" id="Misa_option4" autoComplete="off" />
                                <label className=" color white shadow " for="Misa_option4"></label>

                                <input type="radio" className="btn-check" name="Misa_color" id="Misa_option5" autoComplete="off" />
                                <label className=" color black shadow mx-1" for="Misa_option5"></label>

                                <h2 className="text-white border-right pe-1 px-sm-2 my-2 RoadRadio">S</h2>
                                <h2 className="text-white border-right px-1  px-sm-2 my-2 RoadRadio">M</h2>
                                <h2 className="text-white ps-1 px-sm-2 my-2 RoadRadio">L</h2>

                            </div>
                            <div className="d-flex px-sm-3 py-2 py-sm-3 justify-content-center">
                                <img className="quote" alt="before" src={before} />
                                <p className="text-white pt-3 align-items-center d-flex">СМЕРТЬ? КАКАЯ ПРЕЛЕСТЬ!</p>
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

export default Misa;