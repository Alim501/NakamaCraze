import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <Navbar variant='dark' expand="sm" className="position-absolute w-100 pt-sm-5">
      <Container fluid >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Body>
              <Nav className="me-auto justify-content-between w-28">
                <Nav.Link className='text-white p-1' href="#"><h6 className='m-0'>Главная</h6> <div className='line-long mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
                <Nav.Link className='text-white p-1' href="#catalog"><h6 className='m-0'>Каталог</h6> <div className='line-short mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
              </Nav>
              <Nav className='justify-content-between w-28'>
                <Nav.Link className='text-white p-1' href="#delivery"><h6 className='m-0'>Доставка</h6> <div className='line-short mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
                <Nav.Link className='text-white p-1' href="#contacts"><h6 className='m-0'>Контакты</h6> <div className='line-long mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function Header() {
//   return (
//     <Navbar key="sm" variant='dark' expand="sm" className="mb-3">
//         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
//         <Navbar.Offcanvas
//           id={`offcanvasNavbar-expand-sm`}
//           aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
//           placement="end"
//         >
//           <Offcanvas.Body>
//           <Container fluid >
//             <Nav className="me-auto justify-content-between w-28">
//               <Nav.Link className='text-white p-1' href="#"><h6 className='m-0'>Главная</h6> <div className='line-long mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
//               <Nav.Link className='text-white p-1' href="#catalog"><h6 className='m-0'>Каталог</h6> <div className='line-short mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
//             </Nav>
//             <Nav className='justify-content-between w-28'>
//               <Nav.Link className='text-white p-1' href="#delivery"><h6 className='m-0'>Доставка</h6> <div className='line-short mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
//               <Nav.Link className='text-white p-1' href="#contacts"><h6 className='m-0'>Контакты</h6> <div className='line-long mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
//             </Nav>
//             </Container>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//     </Navbar>
//   );
// }
export default Header;