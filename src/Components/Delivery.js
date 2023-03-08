import { Container, Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import map from "../Assets/map.png"

function Delivery(){
    return(
        <div id="delivery">
             <h1 className=' text-center py-sm-3 bg-yellow section '>ДОСТАВКА</h1>
             <Container fluid className="my-sm-5 my-4">
                <Row>
                    <Col className="text-center">
                        <h1 className="text-yellow px-sm-4 pb-sm-3 font-weight-revert h1-sm RoadRadio">ДОСТАВКА РАБОТАЕТ ПО АЛМАТЫ</h1>
                        <h4 className="text-white p-sm mb-3 mb-sm-0">ТЫ ЗАКАЗЫВАЕШЬ, А МЫ ОТПРАВЛЯЕМ КУРЬЕРОМ, ПРЕДВАРИТЕЛЬНО ОБГОВОРИВ СТОИМОСТЬ.</h4>
                        <div className="border-top w-50 mx-auto my-5 d-none d-sm-block"></div>
                        <p className="text-white mx-auto d-none d-sm-block">САМОМУ ПОКА ЗАБРАТЬ НЕЛЬЗЯ, НО МЫ СКАЖЕМ, <br />КОГДА БУДЕТ МОЖНО:)</p>
                    </Col>
                    <Col sm={5} className=' ps-sm-4'>
                        <Image fluid src={map}/>
                    </Col>
                </Row>
                <div className="d-sm-none text-center">
                <div className="border-top w-50 mx-auto my-sm-5 my-4"></div>
                <p className="text-white mx-auto hyeta">САМОМУ ПОКА ЗАБРАТЬ НЕЛЬЗЯ, НО МЫ СКАЖЕМ, КОГДА БУДЕТ МОЖНО:)</p>
                </div>
             </Container>
        </div>
    )

}
export default Delivery