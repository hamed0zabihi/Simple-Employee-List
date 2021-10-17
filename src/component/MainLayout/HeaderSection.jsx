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
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Container>
    </header>
  );
};

export default HeaderSection;
