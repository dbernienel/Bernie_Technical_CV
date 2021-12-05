import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    const SCREEN_CONSTANTS = {
        description:
        "Recently graduated forensic accountant with a keen interest in information technology. "+
        "Passionate about studying how to improve performance and learning "+
        "new skills. Investec is a great opportunity for me to "+
        "combine my accounting, investigation and information "+
        "techonolgy skills to make a difference in the world."
        ,
        highlights: {
            bullets:[
                "Perform digital evidence acquisitions from electronic devices, including mobile devices.", 
                "Perform open-source intelligence (OSINT) due diligence searches on individuals and companies",
                "Conducting investigations and analysing data using digital forensics tools",
                "Comply with forensically sound procedures while handling digital evidence",   
                "Research new tools and scripts to assist with digital investigations", 
                "Analyse data in IBM I2 Analyst’s Notebook", 
                "Analyse Caller Data Records obtained", 
                "Perform bank statement analysis to identify suspicious transactions", 

             ],
          heading: "Here are a few highlights:",
        },
      };
      const renderHighlight = () => {
        return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
          <div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
          </div>
        ));
      };
    return (
        <div className='about-me-container screen-container fade-in' id = {props.id || ""}>
             <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="Daniel Bernie Nel CV.pdf" download="Daniel Bernie Nel CV.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
