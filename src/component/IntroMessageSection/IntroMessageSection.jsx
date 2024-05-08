import Image from "next/image";
import React from "react";

export default function IntroMessageSection({
  title,
  description,
  image,
  icon,
  type,
  buttonName,
}) {
  return (
    <div className={`message-section ${type}`}>
      <div className="message-first">
        <Image
          className="message-image"
          src={image}
          alt="Transforming Lives"
          height={400}
          width={600}
        />
      </div>
      <div className="message-second">
        <h1 className="message-title">{title}</h1>
        <span className="dash" />
        <p className="message-text">{description}</p>
        <div className="donate-now-section">
          <button className="donate-now">
            {icon}
            <p className="donate-text">{buttonName}</p>
          </button>
        </div>
      </div>
    </div>
  );
}
