import Link from "next/link";
import React from "react";

export default function Footer({ logoImage }) {
  return (
    <footer className="footer-container">
      <div className="footer-box">
        <div className="footer-first">
          <div className="logbar">
            {logoImage}
            <span className="title-box-footer">
              <h1>Dhyeya</h1>
              <h1>Educational</h1>
              <h1>Foundation</h1>
            </span>
          </div>
        </div>
        <div className="footer-second">
          <h4 className="footer-title">QUICK LINKS</h4>
          <Link href={"/about"}>
            <h6 className="footer-links">About us</h6>
          </Link>
          <Link href={"/event"}>
            <h6 className="footer-links">Event</h6>
          </Link>
        </div>
        <div className="footer-third">
          <h4 className="footer-title">GET IN TOUCH</h4>
          <Link href={"/contact"}>
            <h6 className="footer-links">Contact us</h6>
          </Link>
        </div>
      </div>
      <div className="footer-bar">Capyright 2024</div>
    </footer>
  );
}
