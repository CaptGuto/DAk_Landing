import main_logo from "./assets/images/D_3_-removebg-preview.png";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header({
    scrollToSection,
    HeroRef,
    AboutRef,
    ServiceRef,
    ContactRef,
}) {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            // bg="dark"
            variant="dark"
            className="custom-navbar"
        >
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src={main_logo}
                        height="110"
                        width="110"
                        className="d-inline-block align-top"
                        alt="Main Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" style={{ fontSize: "1.2rem" }}>
                        <Nav.Link
                            onClick={() => {
                                scrollToSection(HeroRef);
                            }}
                            className="nav-link Header_Link_Color"
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href=""
                            onClick={() => scrollToSection(AboutRef)}
                            content
                            className="Header_Link_Color"
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                scrollToSection(ServiceRef);
                            }}
                            className="Header_Link_Color"
                        >
                            Service
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                scrollToSection(ContactRef);
                            }}
                            className="Header_Link_Color"
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
