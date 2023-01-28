import { Container, Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import map from "../Colors/map.png"

function Delivery(){
    return(
        <div id="delivery">
             <h1 className='mb-5 text-center py-3 bg-yellow section'>ДОСТАВКА</h1>
             <Container fluid className="my-5 py-5">
                <Row>
                    <Col className="text-center">
                        <h1 className="text-yellow px-4 pb-3">ДОСТАВКА РАБОТАЕТ ПО АЛМАТЫ</h1>
                        <h4 className="text-white">ТЫ ЗАКАЗЫВАЕШЬ, А МЫ ОТПРАВЛЯЕМ КУРЬЕРОМ, ПРЕДВАРИТЕЛЬНО ОБГОВОРИВ СТОИМОСТЬ.</h4>
                        <div className="border-top w-50 mx-auto my-5"></div>
                        <p className="text-white mx-auto">САМОМУ ПОКА ЗАБРАТЬ НЕЛЬЗЯ, НО МЫ СКАЖЕМ,<br/>КОГДА БУДЕТ МОЖНО:)</p>
                    </Col>
                    <Col sm={4}>
                        <Image fluid src={map}/>
                    </Col>
                </Row>
             </Container>
        </div>
    )

}
export default Delivery