
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";

import { IoBag } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userLogout } from "../redux/userSlice";
import { toast } from "react-toastify";

function Header({ cartCount }) {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector(
    (state) => state.userState
  );
const {cartItems} = useSelector((state)=>state.lipstickState);

  const handleLogout = () => {
    dispatch(userLogout());
    toast.success("User logged out");
  };

  return (
    <Navbar expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          chatnest
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/products">
              Product
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/admin/list-products">
                List Products
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/admin/list-users">
                List Users
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="#action/3.3">
                Something
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-auto">

            {/* Show Login when user is NOT authenticated */}
            {!isAuthenticated && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            {/* Cart */}
            <Nav.Link
              as={Link}
              to="/cart"
              className="position-relative"
            >
              <IoBag size={20} />

              <span className="cart-count">
                {cartItems.length}
              </span>
            </Nav.Link>

            {/* Show User Dropdown when authenticated */}
            {isAuthenticated && (
              <NavDropdown
                title={<FaRegUserCircle />}
                id="user-nav-dropdown"
              >
               <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/admin/dasboard">
                  Admin dasboard
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/login"
                  onClick={handleLogout}
                >
                  Logout
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

