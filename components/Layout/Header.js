import Link from 'next/link';
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Link href="/" passHref>
          <Navbar.Brand>My Travel Blog</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
            <NavDropdown title="Destinations" id="basic-nav-dropdown">
              <Link href="/about" passHref>
                <NavDropdown.Item>Something</NavDropdown.Item>
              </Link>{' '}
              <Link href="/about" passHref>
                <NavDropdown.Item>Something else</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
