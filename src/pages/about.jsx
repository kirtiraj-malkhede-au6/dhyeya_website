"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import "./../app/globals.css";
import Footer from "src/component/Footer/Footer";
import PagesNavbar from "src/component/PagesNavbar/PagesNavbar";

const logo = require("./../assets/images/mainicon.png");
const JayBhratPhoto = require("./../assets/Core Team/Jay Chaudhari/jay.jpg");
const AkshayPhoto = require("./../assets/Core Team/Akshay/akshay.jpg");
const DivyaPhoto = require("./../assets/Core Team/Divya/divya.jpg");
const HarshaliPhoto = require("./../assets/Core Team/Harshali Betal/HarshaliBetal.png");
const KunalPhoto = require("./../assets/Core Team/Kunal/kunal.jpg");
const MahimaPhoto = require("./../assets/Core Team/Mahima/mahima.jpg");
const MayuriPhoto = require("./../assets/Core Team/Mayuri/mayuri.jpg");
const NainaPhoto = require("./../assets/Core Team/naina/naina.jpg");
const PranayPhoto = require("./../assets/Core Team/Pranay/pranay.jpg");
const RutikPhoto = require("./../assets/Core Team/Rutik/rutika.jpg");
const SamirPhoto = require("./../assets/Core Team/Sameer/samir.jpg");
const SangamPhoto = require("./../assets/Core Team/Sangam/sangam.jpg");
const SanketPhoto = require("./../assets/Core Team/Sanket/sanket.jpg");
const SatishPhoto = require("./../assets/Core Team/Satish/satish.jpg");

const inter = Inter({ subsets: ["latin"] });

const teamembers = [
  {
    name: "Jay Bharat Choudhari",
    role: "Founder, Dhyeya Educational Foundation",
    details: ["Scholar, The University of Edinburgh, Uk"],
    profileimage: JayBhratPhoto,
  },
  {
    name: "Akshay Khobragade",
    role: "Core team",
    details: ["Manager, MDL Defence PSU, Mumbai"],
    profileimage: AkshayPhoto,
  },
  {
    name: "Divya Bagade",
    role: "",
    details: [
      "Assistant Engineer at MASETCL",
      "M.TECH in System Engineering, Indian Intitute of Technology Hyderabad",
      "B.Tech in Electrical Engineering",
    ],
    profileimage: DivyaPhoto,
  },
  {
    name: "Harshali Betal",
    role: "Finance Management Head",
    details: [
      "ECI Detail Engineer, Siemens-Energy, Pune",
      "MCC in Mechatronics (IGTR)",
      "B.E. in Instrumentation & Control (SPPU)",
    ],
    profileimage: HarshaliPhoto,
  },
  {
    name: "Kunal Bhave",
    role: "Core Member",
    details: ["Sr Associate, WNS, Pune", "B.Tech in mechanical Engineering"],
    profileimage: KunalPhoto,
  },
  {
    name: "Mahima",
    role: "Valunteer",
    details: ["MBA Candidate, Nagpur University"],
    profileimage: MahimaPhoto,
  },
  {
    name: "Mayuri Chaudhari",
    role: "Valunteer",
    details: [
      "Apprentice at Bank of Maharashtra",
      "B.Tech in Electrical Engineering.",
    ],
    profileimage: MayuriPhoto,
  },
  {
    name: "Naina Bhave",
    role: "Core team",
    details: ["PhD Candidate in Bsuiness Economics", "M.COMM, LLB"],
    profileimage: NainaPhoto,
  },
  {
    name: "Pranay Alone",
    role: "Core Team",
    details: [
      "Software Developer, TCS, Nagpur",
      "B-tech in Mechanical Engineering",
    ],

    profileimage: PranayPhoto,
  },
  {
    name: "Rutik Lipate",
    role: "Academics team",
    details: ["Associate Annalect India, Delhi", "MCA,BCA"],
    profileimage: RutikPhoto,
  },
  {
    name: "Samir Bodele",
    role: "Core member",
    details: [
      "Marine Structure Engineer (Masters, National Institute of Technology, Karnataka)",
    ],
    profileimage: SamirPhoto,
  },
  {
    name: "Sangam Ghorpade",
    role: "Core member",
    details: ["B.A. L.L.B MNLU,Pune"],
    profileimage: SangamPhoto,
  },
  {
    name: "Sanket Panchawate",
    role: "Core team",
    details: ["B tech in Mechanical Engineering"],
    profileimage: SanketPhoto,
  },
  {
    name: "Satish Mulmule",
    role: "Core member",
    details: ["B.Tech in Electrical Engineering", "Spoken English tutor"],
    profileimage: SatishPhoto,
  },
  {
    name: "Saurabh Sukhdeve",
    role: "Core Member",
    details: ["Process Inspection Engineer, Primus Sam Pvt Ltd, Nagpur"],
    profileimage: "",
  },
];

export default function about() {
  return (
    <div className={inter.className}>
      <PagesNavbar
        logoImage={
          <Image src={logo} alt="dhyeya foundation" width={50} height={50} />
        }
      />
      <div className="aboutpage-title-container">
        <p className="title">PANCHASHEEL ACADEMY</p>
        <p className="pagetitle">Meet Our Team</p>
      </div>
      <div className="team-container">
        {teamembers.map((member, index) => {
          return (
            <div className="team-card" key={index}>
              <div className="team-card-image">
                {
                  <Image
                    src={member.profileimage}
                    alt={member.name}
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                }
              </div>
              <div className="team-card-content">
                <p className="name">{member.name}</p>
                {member.details.map((item, index) => {
                  return (
                    <p key={index} className="detail">
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <Footer
        logoImage={
          <Image src={logo} alt="dhyeya foundation" width={50} height={50} />
        }
      />
    </div>
  );
}
