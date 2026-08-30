import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { IoBag } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { Link } from "react-router-dom";

function Header({cartCount}) {
    return (
        <Navbar expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand as={Link} to="/">Chatnest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/products">product</Nav.Link>
            <Nav.Link  as={Link} to="/about">About</Nav.Link>
            <Nav.Link  as={Link} to="/contact">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item  as={Link} to="/admin/list-lipsticks">
              List Products</NavDropdown.Item>
             <NavDropdown.Item  as={Link} to="/admin/list-users">
                List Users
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
            
            <Nav className="ms-auto">
            <Nav.Link  as={Link} to="/login">Login</Nav.Link>
            <Nav.Link  as={Link} to="#link" className="position-relative"><IoBag size={20} />
            <span className="cart-count">
              {cartCount}
            </span>
            </Nav.Link>
            
            <NavDropdown title=<FaRegUserCircle /> id="basic-nav-dropdown">
              <NavDropdown.Item  as={Link} to="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    )
}

export default Header;