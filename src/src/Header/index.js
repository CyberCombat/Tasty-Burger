import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar
        style={{
          position: "sticky",
          top: "0",
          zIndex: "100000",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Mulish",
        }}
        bg="primary"
        variant="dark"
      >
        <Navbar.Brand href="#home" className="navbar">
          Tasty Burger
        </Navbar.Brand>
        <Nav>
          <div className="navLogout">
            <span className="bg_grey">Home</span>
          </div>
          {/* <div className="navLogout">
            <span className="bg_grey">Orders</span>
          </div>
          <div className="navLogout">
            <span className="bg_grey">Add Items</span>
          </div>
          <div className="navLogout">
            <span className="bg_grey">Delete Items</span>
          </div>
          <div className="navLogout">
            <span className="bg_grey">Logout</span>
          </div>
          <div className="navLogout">
            <span className="bg_grey">ContactUs</span>
          </div> */}
          <span className="hamburger">
            <i
              // onClick={props.changeDisplay}
              className="fa fa-bars"
              aria-hidden="true"
            />
          </span>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
