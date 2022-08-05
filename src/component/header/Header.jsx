import "./header.css";
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';

function Header(props) {
  
  const { navList } = props;

  return (
    <section id="navbar">
      {['sm'].map((expand) => (
        <Navbar variant="light" expand={expand} className="navbar-header">
          <Container>
            <Navbar.Brand href="/">
              {/* <img src="https://s3-ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2021/10/19135936/Logo-Moladin-Terbaru-001.png" alt="" className="img-logo"/> */}
              <h4>Binar Car Rental</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                {navList.map((item)=> (
                  <Nav.Link href={item.link}>{item.judul}</Nav.Link>
                ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </section>
  );
}

export default Header;
