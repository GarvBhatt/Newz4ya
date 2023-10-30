import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const footerStyle = {
  position: "relative",
  bottom: 0,
  marginTop: "15px",
  width: "100%",
  backgroundColor: "#333",
  color: "white",
  padding: "15px 0",
};

const Footer = () => (
  <footer
    className="page-footer font-small bg-dark text-white pt-4"
    style={footerStyle}
  >
    <div className="footer-wrapper bg-secondary py-4 container text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5>ABOUT Newz4ya</h5>
          <p>
            Welcome to Newz4ya, your go-to source for the latest news and top articles from around the world. Our mission is to provide you with a simple and user-friendly platform to stay informed and updated on current events. Explore a wide range of categories and easily search for news articles based on your interests and preferences.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                Home
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                Categories
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                Search
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Follow Us</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                <span style={{ paddingRight: "5px" }}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </span>{" "}
                Facebook
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                <span style={{ paddingRight: "5px" }}>
                  <FontAwesomeIcon icon={faInstagram} />
                </span>{" "}
                Instagram
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                <span style={{ paddingRight: "5px" }}>
                  <FontAwesomeIcon icon={faTwitter} />
                </span>{" "}
                Twitter
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                <span style={{ paddingRight: "5px" }}>
                  <FontAwesomeIcon icon={faPinterest} />
                </span>{" "}
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-dark text-white text-center py-3">
      &copy; {new Date().getFullYear()} Newz4ya. All rights reserved. |{" "}
      <a href="https://newz4ya.com/" className="text-white">
        Newz4ya.com
      </a>
    </div>
  </footer>
);

export default Footer;