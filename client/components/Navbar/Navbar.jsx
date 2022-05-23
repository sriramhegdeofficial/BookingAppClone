import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">Booking.com</span>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
          <div className="hamburgerMenu">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navbar {
            height: 50px;
            background-color: #003580;
            display: flex;
            justify-content: center;

            width: 100%;
          }

          .navContainer {
            width: 100%;
            max-width: 1024px;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 12px;
          }

          .logo {
            font-weight: 700;
            cursor: pointer;

            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
          }

          .navItems {
            display: none;
          }

          .navButton {
            margin-left: 20px;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            color: #003580;
            background: white;
            font-weight: 700;
            border-radius: 2px;
            min-width: 80px;
          }

          @media only screen and (min-width: 768px) {
            .hamburgerMenu {
              display: none;
            }
            .navItems {
              display: block;
            }
          }

          @media only screen and (min-width: 1024px) {
            .navContainer {
              padding: 0px;
            }
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
