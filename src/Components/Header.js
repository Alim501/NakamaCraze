import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import phone from "../phone.png"
import instagram from "../instagram.png"
import { Image } from 'react-bootstrap';

function Header() {
  return (
    <Navbar variant='dark' expand="sm" className="z-index-10 position_absolute w-100 pt-sm-5 position-sticky-sm">
      <Container fluid >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header className='bg-yellow' closeButton>
              <Offcanvas.Title className='text-black RoadRadio' id={`offcanvasNavbarLabel-expand-sm`}>
                Nakama Craze
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className=''>
              <Nav className="me-sm-auto justify-content-between w-28">
                <Nav.Link className='text-white py-3 p-sm-1' href="#"><h6 className='m-0'>Главная</h6> <div className='line-long mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
                <Nav.Link className='text-white py-3 p-sm-1' href="#catalog"><h6 className='m-0'>Каталог</h6> <div className='line-short mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
              </Nav>
              <Nav className='justify-content-between w-28'>
                <Nav.Link className='text-white py-3 p-sm-1' href="#delivery"><h6 className='m-0'>Доставка</h6> <div className='line-short mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
                <Nav.Link className='text-white py-3 p-sm-1' href="#contacts"><h6 className='m-0'>Контакты</h6> <div className='line-long mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
              </Nav>
              <Nav className='mt-5  d-sm-none'>
                <a className="p text-white footerLink" href="tel:+77478705751" role="button">
                  <Image fluid className="me-2 " src={phone} alt="" />+7 (747)870-57-51
                </a>
                <a className="p my-3 my-sm-0 text-white footerLink" href="https://instagram.com/nakama.craze?igshid=YmMyMTA2M2Y=" role="button">
                  <Image fluid className="me-2 " src={instagram} alt="" />NACAMA.CRAZE
                </a>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;