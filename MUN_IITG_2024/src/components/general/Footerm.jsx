import "./footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import munlogo from "./munlogo.png";
export default function Footer() {
  return (
    <div className="container-main2">
      <div className="left">
        <div className="contact">
          <p className="heading">Contact Us</p>
          <p>+91 XXXXXXXXXX</p>
          <p>+91 XXXXXXXXXX</p>
        </div>
        <div className="address">
          <p className="heading">Address</p>
          <p>Conference Hall, IIT Guwahati,</p>
          <p>North Guwahati, Guwahati,</p>
          <p>Assam 781039</p>
        </div>
        <div className="mail">
          <p className="heading">Mail Us</p>
          <p>iitgmun@alcheringa.in</p>
        </div>
        <div className="social">
          <a
            href="https://www.instagram.com/iitg_mun/"
            target="_blank"
            className="no-underline text-[black]"
          >
            <i className="bi bi-instagram fs-3"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/iitgmun/"
            target="_blank"
            className="no-underline text-[black]"
          >
            <i className="bi bi-linkedin fs-3"></i>
          </a>
          <a
            href="https://www.facebook.com/iitgmun"
            target="_blank"
            className="no-underline text-[black]"
          >
            <i className="bi bi-facebook fs-3"></i>
          </a>
          <a
            href="https://twitter.com/iitg_mun"
            target="_blank"
            className="no-underline text-[black]"
          >
            <i className="bi bi-twitter-x fs-3"></i>
          </a>
        </div>
        <div className="author">
          <p>Developed by XYZ</p>
          <p>Designed by XYZ</p>
        </div>
      </div>

      <div className="logo">
        <img src={munlogo} alt="" className="img"></img>
      </div>
    </div>
  );
}
