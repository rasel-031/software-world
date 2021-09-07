import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-us">
          <h2>About Us</h2>
          <div className="about-links">
            <a href="#1">RT Soft World Info</a>
            <a href="#2">Help & Support</a>
            <a href="#3">Jobs</a>
            <a href="#4">Company News</a>
          </div>
        </div>
        <div className="about-legal">
          <h2>Legal Deed</h2>
          <div className="about-links">
            <a href="#1">Legal Information</a>
            <a href="#2">Terms of use</a>
            <a href="#3">Privacy Policy</a>
            <a href="#4">Cookie Policy</a>
          </div>
        </div>
        <div className="about-social">
          <h2>Connect with Us</h2>
          <div className="about-links">
            <a href="#1">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ paddingRight: "6px" }}
              />
              Facebook
            </a>
            <a href="#2">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                style={{ paddingRight: "6px" }}
              />
              Instagram
            </a>
            <a href="#3">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ paddingRight: "6px" }}
              />
              LinkedIn
            </a>
            <a href="#4">
              <FontAwesomeIcon
                icon={faGithubSquare}
                style={{ paddingRight: "6px" }}
              />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <h5 style={{ textAlign: "center" }}>
        Copyright © 2017-2021 - All rights reserved
      </h5>
    </>
  );
}

export default About;
