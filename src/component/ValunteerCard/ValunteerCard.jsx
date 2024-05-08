import Image from "next/image";
import React from "react";

export default function ValunteerCard({ image, name, description }) {
  return (
    <div className="valunteer-card">
      <Image
        src={image}
        alt="valunteer"
        height={200}
        width={200}
        className="valunteer-image"
      />
      <p className="valunteer-name">{name}</p>
      <p className="valunteer-comment">{description}</p>
    </div>
  );
}
