import Navbar from "../components/general/Navbar";
import Letter from "../components/aboutUs/letter";
import MeetTheTeam from "../components/aboutUs/meetTheTeam";
import PageHeader from "../components/general/pageHeader";
import { useState, useEffect } from "react";
import Mnavbar from "../components/general/mobile_nav";
import Footerm from "../components/general/Footerm";

import "./aboutUs.css";
import globe from "../assets/aboutUs/globe.svg";
import logo from "../assets/aboutUs/logo.svg";

const AboutUs = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600); // Adjust the width breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full">
      <Mnavbar />
      {!isMobileView && <Navbar />}

      <header className="about-top">
        <div className="header-logo">
          <img src={globe} alt=""></img>
        </div>
      </header>
      <div className="about1">
        <p className="about1-text">
          The MUN, or the Model United Nations, is a simulation of the actual
          UN. The participants pretend to represent a nation, and come to
          together to discuss the very same issues being debated upon in the UN.
          This gives a normal person the opportunity to know what’s its like to
          stand for something more than himself/herself, and to experience the
          complicated the verbal dance and that politicians and delegates take
          part in everyday. The MUN is a conclave for ideation by the fresh
          minds of our nation, to brainstorm solutions to problems plaguing our
          world. Participants work through the tenuous relationships between
          nations as they deliberate towards a resolution – and they get to look
          nice in a suit and tie while they do it!
        </p>
      </div>
      <div className="about2">
        <div className="about2-text">
          <h1 className="about2-h1">About IITGMUN Edition XVII</h1>
          <p className="about2-p">
            The MUN, or the Model United Nations, is a simulation of the actual
            UN. The participants pretend to represent a nation, and come to
            together to discuss the very same issues being debated upon in the
            UN. This gives a normal person the opportunity to know what’s its
            like to stand for something more than himself/herself, and to
            experience the complicated the verbal dance and that politicians and
            delegates take part in everyday. The MUN is a conclave for ideation
            by the fresh minds of our nation, to brainstorm solutions to
            problems plaguing our world. Participants work through the tenuous
            relationships between nations as they deliberate towards a
            resolution – and they get to look nice in a suit and tie while they
            do it!
          </p>
        </div>
        <div className="about-logo">
          <img src={logo} alt="" className="about-img"></img>
        </div>
      </div>
      <Letter />
      <MeetTheTeam />
      <Footerm />
    </div>
  );
};

export default AboutUs;
