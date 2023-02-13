import { Image,Container } from "react-bootstrap"
import phone from "../phone.png"
import instagram from "../instagram.png"
import craze from "../craze.png"

function Contacts() {
    return (
        <footer className="bg-yellow" id="contacts">
            
            <Container fluid className="py-4 justify-content-center d-flex">
            <div className="d-flex align-items-center">
            <a className="d-sm-none mx-auto mx-sm-5" href="#!" role="button">
                <Image  className=" d-none d-sm-inline footerlogo my-2 my-sm-0" src={craze} alt="" />
            </a>

            <a className="p text-black footerLink" href="tel:+77478705751" role="button">
                <Image fluid className="me-2 " src={phone} alt="" />+7 (747)870-57-51
            </a>
            <a className="mx-auto mx-sm-5" href="#!" role="button">
                <Image  className=" d-none d-sm-inline footerlogo my-2 my-sm-0" src={craze} alt="" />
            </a>
            <a className="p text-black footerLink" href="https://instagram.com/nakama.craze?igshid=YmMyMTA2M2Y=" role="button">
                <Image fluid className="me-2 " src={instagram} alt="" />NACAMA.CRAZE
            </a>
            </div>
            </Container>
            
        </footer>
        
    )
}
export default Contacts;