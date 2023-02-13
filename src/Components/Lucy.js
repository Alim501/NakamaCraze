import { Container, Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import before from "../1.png"
import after from "../2.png"
import price from "../price.png"
import LucyPink from "../Colors/Lucy/LucyPink.png"
import LucyGreen from "../Colors/Lucy/LucyGreen.png"
import LucyRed from "../Colors/Lucy/LucyRed.png"
import LucyWhite from "../Colors/Lucy/LucyWhite.png"
import LucyBlack from "../Colors/Lucy/LucyBlack.png"
import LucyPink_sm from "../Colors/Lucy/LucyPink-sm.png"
import LucyGreen_sm from "../Colors/Lucy/LucyGreen-sm.png"
import LucyRed_sm from "../Colors/Lucy/LucyRed-sm.png"
import LucyWhite_sm from "../Colors/Lucy/LucyWhite-sm.png"
import LucyBlack_sm from "../Colors/Lucy/LucyBlack-sm.png"

function Lucy() {
    return (
        <div >
            <div className="slicer"></div>
            <Container fluid className="pt-5">
                <Row>
                    <Col sm={7}>
                        <Carousel interval={null} controls={false}>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={LucyWhite}
                                    srcSet={`${LucyWhite_sm} 576w`}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={LucyBlack}
                                    srcSet={`${LucyBlack_sm} 576w`}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={LucyGreen}
                                    srcSet={`${LucyGreen_sm} 576w`}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image fluid
                                    className="d-block w-100"
                                    src={LucyRed}
                                    srcSet={`${LucyRed_sm} 576w`}
                                    alt="Fourht slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={LucyPink}
                                    srcSet={`${LucyPink_sm} 576w`}
                                    alt="Fith slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className="text-center pb-5 d-grid" sm={5}>
                        <div>
                        <h1 className="text-yellow m-0 RoadRadio ">HOODIE "LUCY"</h1>
                        <div className="text-white mb-4 pb-sm-2 h4">CYBERPUNK: EDGERUNNERS</div>
                        <div className="border-top  d-flex border-bottom py-2 mb-2 align-items-center justify-content-center">
                           
                            <input type="radio" className="btn-check" name="lucy_color" id="lucy_option1" autoComplete="off" />
                            <label className=" color red shadow mx-1" for="lucy_option1"></label>

                            <input type="radio" className="btn-check" name="lucy_color" id="lucy_option2" autoComplete="off" />
                            <label className=" color green shadow " for="lucy_option2"></label>

                            <input type="radio" className="btn-check" name="lucy_color" id="lucy_option3" autoComplete="off" />
                            <label className=" color pink shadow mx-1" for="lucy_option3"></label>

                            <input type="radio" className="btn-check" name="lucy_color" id="lucy_option4" autoComplete="off" />
                            <label className=" color white shadow " for="lucy_option4"></label>

                            <input type="radio" className="btn-check" name="lucy_color" id="lucy_option5" autoComplete="off" />
                            <label className=" color black shadow mx-1" for="lucy_option5"></label>
                           
                            <h2 className="text-white border-right px-2 my-2 RoadRadio">S</h2>
                            <h2 className="text-white border-right px-2 my-2 RoadRadio">M</h2>
                            <h2 className="text-white px-2 my-2 RoadRadio">L</h2>
                            
                        </div>
                        <div className="d-flex p-3 mb-3 justify-content-center">
                            <img className="quote" alt="before" src={before} />
                            <p className="text-white pt-3 align-items-center d-flex">ТЕБЕ НИКОГДА НЕ НУЖНО БЫЛО СПАСАТЬ МЕНЯ</p>
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

export default Lucy;