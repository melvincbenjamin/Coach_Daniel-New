import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/Logo.jpg';

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
       <Navbar.Brand href="home"><img alt="Logo" src={Logo} style={{ height: '40px', width: 'auto' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-10"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <NavDropdown title="Media" id="navbarScrollingDropdown">
              <NavDropdown.Item href="videos">Videos</NavDropdown.Item>
              <NavDropdown.Item href="images">Images</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="team">Team</Nav.Link>
              <Nav.Link href="team">Tournaments</Nav.Link>
            <Nav.Link href="#testimonial">Testimonials</Nav.Link>
            <Nav.Link href="team">Sponsors</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
<Button
  variant="outline-success"
  onClick={() => {
    const query = document.querySelector('input[aria-label="Search"]').value;
    if (query) {
      const encodedQuery = encodeURIComponent(query);
      window.location.href = `https://www.google.com/search?q=${encodedQuery}+site:nigeriatennislive.com`;
    }
  }}
>
  Search
</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;