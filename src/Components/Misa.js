import { Container, Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import before from "../1.png"
import after from "../2.png"
import MisaPink from "../Colors/MisaPink.png"
import price from "../price.png"
import MisaGreen from "../Colors/MisaGreen.png"
import MisaRed from "../Colors/MisaRed.png"
import MisaWhite from "../Colors/MisaWhite.png"
import MisaBlack from "../Colors/MisaBlack.png"

function Misa() {
    return (
        <div>
            <div className="slicer"></div>
            <Container fluid className="pt-5">
                <Row>
                    <Col sm={7}>
                        <Carousel interval={null} controls={false}>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={MisaBlack}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={MisaWhite}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={MisaGreen}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image fluid
                                    className="d-block w-100"
                                    src={MisaRed}
                                    alt="Fourht slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={MisaPink}
                                    alt="Fith slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className="text-center pb-5 d-grid" sm={5}>
                        <div>
                        <h1 className="text-yellow m-0 RoadRadio name">HOODIE "MISA"</h1>
                        <div className="text-white mb-4 pb-2 h4">DEATH NOTE</div>
                        <div className="border-top d-grid d-sm-flex border-bottom py-2 mb-2 align-items-center justify-content-center">
                            <div className="d-flex">
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
                            </div>
                            <div className="d-flex justify-content-center">
                            <h2 className="text-white border-right px-2 my-2  RoadRadio">S</h2>
                            <h2 className="text-white border-right px-2 my-2 RoadRadio">M</h2>
                            <h2 className="text-white px-2 my-2 RoadRadio">L</h2>
                            </div>
                        </div>
                        <div className="d-flex p-3 mb-3 justify-content-center">
                            <img className="quote" alt="before" src={before} />
                            <p className="text-white pt-3 align-items-center d-flex">СМЕРТЬ? КАКАЯ ПРЕЛЕСТЬ!</p>
                            <img className="quote mt-5" alt="after" src={after} />
                        </div>
                        </div>
                        <Image fluid
                            className="align-self-end mx-auto"
                                src={price}
                            />
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default Misa;