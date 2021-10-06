import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header>
      <Container fluid className="px-0">
        <div className="items-align-center">
          <Navbar expand="md" className="navbar-dark bg-dark  px-4 ">
            <Link to="/" className="navbar-brand">
              <img src="../img/logo/icons8-company-50.png" alt="logo" />
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar className="ms-auto items-align-center">
                <NavItem>
                  <Link to="/met" className="nav-link">
                    met
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Container>
    </header>
  );
};

export default HeaderSection;
