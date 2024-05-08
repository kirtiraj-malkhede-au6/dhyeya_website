"use client";

import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "src/assets/Icons/MenuIcon";
import landingImage from "./../../assets/images/ngo-wallpaper.jpg";
import mainLandingImage from "./../../assets/images/mahatmaphule.jpeg";
import Link from "next/link";

export default function Navbar(props) {
  return (
    <div className={`navbar-content-section`}>
      <nav className="navbar-links">
        <div className="links">
          <Link href={"/"}>
            <p>Home</p>
          </Link>
        </div>
        <div className="links">
          <Link href={"/events"}>
            <p>Events</p>
          </Link>
        </div>
        <div className="links">
          <Link href={"/about"}>
            <p>About Us</p>
          </Link>
        </div>
        <div className="links">
          <Link href={"/contact"}>
            <p>Contact Us</p>
          </Link>
        </div>
      </nav>
      <div className="landing-image">
        <Image
          src={mainLandingImage}
          alt="dhyeya foundation"
          width={600}
          height={550}
        />
      </div>
    </div>
  );
}
