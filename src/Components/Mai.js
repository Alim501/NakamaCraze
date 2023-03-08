import { Container, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import before from "../Assets/1.png"
import after from "../Assets/2.png"
import MaiPink from "../Assets/Colors/Mai/MaiPink.png"
import price from "../Assets/price.png"
import MaiGreen from "../Assets/Colors/Mai/MaiGreen.png"
import MaiRed from "../Assets/Colors/Mai/MaiRed.png"
import MaiWhite from "../Assets/Colors/Mai/MaiWhite.png"
import MaiBlack from "../Assets/Colors/Mai/MaiBlack.png"
import MaiPink_sm from "../Assets/Colors/Mai/MaiPink-sm.png"
import MaiGreen_sm from "../Assets/Colors/Mai/MaiGreen-sm.png"
import MaiRed_sm from "../Assets/Colors/Mai/MaiRed-sm.png"
import MaiWhite_sm from "../Assets/Colors/Mai/MaiWhite-sm.png"
import MaiBlack_sm from "../Assets/Colors/Mai/MaiBlack-sm.png"
function ColorList(props) {
    const name = 'Mai';
    const Colors = ['red', 'green', 'pink', 'white', 'black'].map((color) => (
        <div key={color}>
            <input type="radio" className="btn-check" name="misato_color" id={name + color} autoComplete="off" />
            <label className={`color ${color} shadow me-1`} for={name + color}></label>
        </div>
    ))
    return (
        <div className="d-flex">
            {Colors}
        </div>
    );
}

function Mai() {
    return (
        <div >
            <div className="slicer"></div>
            <Container fluid className="py-4 pt-sm-5 pb-sm-0">
                <Row>
                    <Col sm={7}>
                        <Swiper modules={Pagination}>
                            <SwiperSlide>
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MaiRed_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MaiRed}
                                        alt="First slide"
                                    />
                                </picture>
                            </SwiperSlide>
                            <SwiperSlide>
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MaiBlack_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MaiBlack}
                                        alt="First slide"
                                    />
                                </picture>
                            </SwiperSlide>
                            <SwiperSlide>
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MaiPink_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MaiPink}
                                        alt="First slide"
                                    />
                                </picture>
                            </SwiperSlide>
                        </Swiper>
                        {/* <Carousel interval={null} controls={false}>
                            <Carousel.Item className="fadex">
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MaiRed_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MaiRed}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MaiBlack_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MaiBlack}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MaiPink_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MaiPink}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item>
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MaiGreen_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MaiGreen}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <picture>
                                    <source media="(max-width:576px)" srcSet={MaiWhite_sm}></source>
                                    <Image fluid
                                        className="d-block w-100"
                                        src={MaiWhite}
                                        alt="First slide"
                                    />
                                </picture>
                            </Carousel.Item>
                        </Carousel> */}
                    </Col>
                    <Col className="text-center pb-sm-5 pb-4 d-grid" sm={5}>
                        <div>
                            <h1 className="text-yellow m-0 RoadRadio">HOODIE "MAI"</h1>
                            <div className="text-white mb-2 mb-sm-4 pb-sm-2 h4-min">ЭТОТ ГЛУПЫЙ СВИН НЕ ПОНИМАЕТ МЕЧТУ ДЕВОЧКИ-ЗАЙКИ</div>
                            <div className="border-top d-flex border-bottom py-2 mb-2 align-items-center justify-content-center">
                                <ColorList></ColorList>
                                <h2 className="text-white border-right pe-1 px-sm-2 my-2 RoadRadio">S</h2>
                                <h2 className="text-white border-right px-1  px-sm-2 my-2 RoadRadio">M</h2>
                                <h2 className="text-white ps-1 px-sm-2 my-2 RoadRadio">L</h2>

                            </div>
                            <div className="d-flex px-sm-3 py-2 py-sm-3 justify-content-center">
                                <img className="quote" alt="before" src={before} />
                                <p className="text-white pt-3 align-items-center d-flex">Я ВЕДЬ ПРИВЫКЛА БЫТЬ ОДНОЙ. НЕ ВОЛНУЙСЯ. НУ ЗАБУДЕШЬ ТЫ МЕНЯ - ЭТО МЕЛОЧИ</p>
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

export default Mai;