import React, { useState } from "react";
// import logo_img from "./images/logo.png";
import logoImage from "./images/logoImage.jpeg";
import { HashLink } from "react-router-hash-link";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Navbar.css";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const closeMobileMenu = () => {
    setActive(false);
  };

  const dropdownItems = [
    { name: "DENTAL PROCEDURES", link: "/" },
    { name: "AESTHETIC PROCEDURES", link: "/" }

  ];

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <HashLink to="/#home">
            <img src={logoImage} alt="om dental clinic logo" style={{borderRadius:"200px", marginLeft:"10px", marginRight:"10px"}}/>
          </HashLink>
          {/* <h2>Dental Clinic</h2> */}
          <h2 >Smile Avenue</h2>
        </div>
        <div className={isActive ? "active_links" : "links"}>
          <div className="MenuItems">
            <HashLink to="/#home" onClick={closeMobileMenu}>
              Home
            </HashLink>
          </div>
          <div className="MenuItems">
            <HashLink to="/#about-doctors" onClick={closeMobileMenu}>
              About Us
            </HashLink>
          </div>
          <div className="MenuItems">
            <Dropdown>
              <Dropdown.Toggle as="div" className="nav-link" id="dropdown-basic" style={{color:"#E3C44D", fontWeight:"600"}}>
                Services
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {dropdownItems.map((item, index) => (
                  <Dropdown.Item key={index} href={item.link}>
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="MenuItems">
            <HashLink to="/#contact-us" onClick={closeMobileMenu}>
              Contact Us
            </HashLink>
          </div>
        </div>
        <div className="toggle_menu_icons" onClick={handleClick}>
          <i className={isActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
