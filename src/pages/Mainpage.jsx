"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import CloseIcon from "src/assets/Icons/CloseIcon";
import MenuIcon from "src/assets/Icons/MenuIcon";
import Navbar from "src/component/Navbar/Navbar";

import EducationIcon from "src/assets/Icons/EducationIcon";
import CareerIcon from "src/assets/Icons/CareerIcon";
import ComunityIcon from "src/assets/Icons/ComunityIcon";
import ForwardArrowIcon from "src/assets/Icons/ForwardArrowIcon";
import JoinIcon from "src/assets/Icons/JoinIcon";
import IntroMessageSection from "src/component/IntroMessageSection/IntroMessageSection";
import ValunteerCard from "src/component/ValunteerCard/ValunteerCard";

import Footer from "src/component/Footer/Footer";
const logo = require("./../assets/images/mainicon.png");
const valunteerImage_1 = require("./../assets/images/shivasing.jpg");
// const valunteerImage_2 = require("./../assets/images/shivasing.jpg");
const valunteerImage_2 = require("./../assets/images/dikshaa.jpg");
const kidsImage = require("./../assets/images/kids.jpeg");
const studentsImage = require("./../assets/images/students.jpeg");
const classroomImage = require("./../assets/images/classroom.jpeg");

const messageIntroData_1 = {
  title: "Transforming Lives, Building Futures",
  description:
    "Step into a world where education isn't just a privilege; it's a fundamental right. From providing essential academic support to fostering creativity and critical thinking skills, we're cultivating a generation of leaders who will shape tomorrow's world.",
};
const messageIntroData_2 = {
  title: "Join Us in Making a Difference",
  description:
    "Whether you're a passionate educator, a generous donor, or a community champion, there's a place for you in our journey. Explore our volunteer opportunities, learn how you can donate to support our cause, or simply spread the word about the power of education.",
};

const messageIntroData_3 = {
  title: "Why Education Matters",
  description:
    "Education isn't just about textbooks and classrooms—it's about empowerment. It's about giving children the tools they need to dream big, break barriers, and create positive change in their communities. With education, anything is possible.",
};

const valunteer_1 = {
  name: "SHIVASING BORADE",
  description:
    "My experience with Dhyeya Foundation has been Incredible. Everyone in the foundation has been incredibly supportive. I want to give a special thanks to Dhyeya Educational Foundation and its founder, Jay, for giving me this amazing opportunity to share knowledge. I truly appreciate the valuable work they do.",
};
const valunteer_2 = {
  name: "DIKSHA RAWAL",
  description:
    "Mentoring the C programming crash course at Dhyeya Educational Foundation has been a very good experience. It has allowed me to witness immense growth in students' coding skills, fostering a deeper understanding of algorithms and problem-solving. Guiding and motivating them towards efficient coding practices has been incredibly interesting. Seeing their progress and passion for mastering C programming has been a fulfilling journey",
};

const Mainpage = () => {
  const [visible, setVisible] = useState(false);

  const handleOpenMenu = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Fragment>
      <section className="navbar-container">
        <aside className="navbar-left">
          <div className="logbar">
            <Image src={logo} alt="dhyeya foundation" width={50} height={50} />

            <span className="title-box">
              <h1>Dhyeya</h1>
              <h1>Educational</h1>
              <h1>Foundation</h1>
            </span>

            {!visible && (
              <button className="menuIcon" onClick={handleOpenMenu}>
                <MenuIcon />
              </button>
            )}
          </div>
          <div className="welcome-banner">
            <h1 className="welcome-text">
              Welcome to Dhyeya Educational Foundation – Empowering Dreams
              through Education.
            </h1>
            <p className="welcome-subtext">
              At Dhyeya Educational Foundation, we believe that every child
              deserves access to quality education, regardless of their
              background or circumstances. Welcome to our digital hub.
            </p>
            <div className="welcome-btn-section">
              <button className="donate-btn">
                <span>Donate Now</span>
              </button>
              <button className="watch-btn">
                <span> watch video</span>
              </button>
            </div>
          </div>
        </aside>
        <aside
          className={`navbar-right ${
            visible ? "drawer-visible" : "drawer-hide"
          }`}
        >
          <Navbar />

          {visible && (
            <button className="closeIcon" onClick={handleClose}>
              <CloseIcon />
            </button>
          )}
        </aside>
      </section>
      <div>
        <div className="mission-section border-top">
          <h1 className="mission-title">Dhyeya&apos;s Mission</h1>
          <p className="mission-subtext">
            We&apos;re on a mission to bridge the gap in educational
            opportunities for students from marginalized communities
            specifically Dalits and Adivasis in two major under-developing
            districts of Chandrapur and Gadchiroli in Maharashtra. Through
            innovative programs, dedicated volunteers, and unwavering community
            support, we strive to unlock the full potential of every young mind
            we touch.
          </p>
          <p className="mission-words">
            <i>
              I faced many obstacles on my journey to higher education due to a
              lack of opportunities and guidance. Now, as a founding member of
              this Educational Foundation, I&apos;m committed to guiding
              students facing similar challenges. Our aim is clear: to support
              those striving for a brighter future.
            </i>
            <b>– Jay Bharat, Founder, Dhyeya Educational Foundation.</b>
          </p>
        </div>

        <div className="initiative-banner">
          <div className="initiative-item">
            <span className="initiative-icon">
              <EducationIcon />
            </span>
            <p className="initiative-title">Education</p>
            <p className="initiative-subtitle">
              At Dhyeya, we believe in empowering students through personalized
              learning experiences. Our dedicated team of tutors and mentors are
              committed to teaching, training, and guiding every student who
              walks through our doors. We ensure that each individual not only
              learns but thrives, setting them up for success in their academic
              journey.
            </p>
          </div>
          <div className="initiative-item">
            <span className="initiative-icon">
              <CareerIcon />
            </span>
            <p className="initiative-title">Career Guidence</p>
            <p className="initiative-subtitle">
              In addition to providing education, we understand the value of
              guiding students towards a satisfying career paths. Through a
              series of seminars and sessions, we equip our students with the
              necessary skills and insights to excel in both the public and
              private sectors. At Dhyeya, we believe in nurturing talent and
              empowering individuals to reach their full potential in the
              professional world.
            </p>
          </div>
          {/* <div className="initiative-item">
            <span className="initiative-icon">
              <LearningIcon />
            </span>
            <p className="initiative-title">Education</p>
            <p className="initiative-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              praesentium totam
            </p>
          </div> */}
          <div className="initiative-item">
            <span className="initiative-icon">
              <ComunityIcon />
            </span>
            <p className="initiative-title">Comunity Support</p>
            <p className="initiative-subtitle">
              What truly makes Dhyeya Dhyeya is our strong sense of community.
              Our alumni play an integral role in giving back to the foundation
              by returning as a mentor and teach the next generation of
              students.
            </p>
          </div>
        </div>
      </div>
      <div>
        <IntroMessageSection
          title={messageIntroData_1.title}
          description={messageIntroData_1.description}
          image={kidsImage}
          icon={<ForwardArrowIcon height={30} width={30} />}
          type={""}
          buttonName={"Donate Now"}
        />
        <IntroMessageSection
          title={messageIntroData_3.title}
          description={messageIntroData_3.description}
          image={studentsImage}
          icon={<ForwardArrowIcon height={30} width={30} />}
          type={"second"}
          buttonName={"Donate Now"}
        />
        <IntroMessageSection
          title={messageIntroData_2.title}
          description={messageIntroData_2.description}
          image={classroomImage}
          icon={<JoinIcon height={30} width={30} />}
          type={""}
          buttonName={"Join Now"}
        />
      </div>
      <div className="valunteer-section">
        <div className="valunteer-title">
          <span className="center">
            <p>Hear from our volunteers</p>
            <div className="border" />
          </span>
        </div>
        <div className="valunteer-container">
          <ValunteerCard
            image={valunteerImage_1}
            name={valunteer_1.name}
            description={valunteer_1.description}
          />
          <ValunteerCard
            image={valunteerImage_2}
            name={valunteer_2.name}
            description={valunteer_2.description}
          />
        </div>
      </div>
      <div className="last-banner">
        <span className="center">
          <p className="last-banner-title">
            Together, We Can Make a Difference
          </p>
          <div className="border" />
        </span>
        <p className="last-banner-desc">
          At Dhyeya Educational Foundation, we believe in the collective
          strength of individuals united by a common purpose. Join us as we
          rewrite the story of education, one chapter at a time. Together,
          let&apos;s build a future where every child has the opportunity to
          thrive.
        </p>
        <p className="last-banner-desc">
          Ready to Get Started? Explore our website to learn more about our
          programs, meet the faces behind our organization, and discover how you
          can get involved. Together, let&apos;s inspire, educate, and empower
          the next generation of leaders.
        </p>
        <p className="last-banner-desc">
          <b>
            Welcome to Dhyeya Educational Foundation—where dreams take flight,
            and education knows no bounds.
          </b>
        </p>
      </div>
      <Footer
        logoImage={
          <Image src={logo} alt="dhyeya foundation" width={50} height={50} />
        }
      />
    </Fragment>
  );
};

export default Mainpage;
