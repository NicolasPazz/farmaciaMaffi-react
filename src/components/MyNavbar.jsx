import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget"

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Farmacia Maffi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-right"/>
                <Navbar.Collapse id="basic-navbar-nav" className="me-right"> 
                    <Nav className="me-auto">
                        <hr />
                        <Nav.Link href="#cosmetica">Cosmética</Nav.Link>
                        <Nav.Link href="#farmacia">Farmacia</Nav.Link>
                        <Nav.Link href="#hogar-y-alimentos">Hogar y Alimentos</Nav.Link>
                    </Nav>
                    <Nav className="me-right">
                        <hr />
                        <Nav.Link href="#ingresar" className="login">Ingresar</Nav.Link>
                        <hr />
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
                <Nav className="me-right">
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;
