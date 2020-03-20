import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, Container, Button } from "reactstrap";
import { LogOut } from "react-feather";

import { useAuth } from "../../shared/AuthManager";
import ButtonStyles from "../styles/IconButton.module.scss";

const Header = () => {
  const { isAuthenticated, user, toggleLogin, logout } = useAuth();

  return (
    <Navbar light expand="md">
      <Container>
        <Nav className="mr-auto" navbar>
          <NavbarBrand tag={Link} to="/">
            Ideas
          </NavbarBrand>
        </Nav>

        {isAuthenticated ? (
          <div className="d-flex align-items-center">
            <span className="mr-1">{`Hi, ${user.name}`}</span>

            <Button className={ButtonStyles.IconButton} onClick={logout}>
              <LogOut />
            </Button>
          </div>
        ) : (
          <Button color="info" onClick={toggleLogin}>
            Login
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
