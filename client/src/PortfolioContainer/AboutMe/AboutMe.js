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
        desciption : "Bernie is blah blah description",
        highlights:{
            bullets:[
               "Bullet 1", 
               "Bullet 2",
               "Bullet 3",
               "Such is life",     
            ],
            heading: "Here are a few highlights:"
        }
    }
    const SCREEN_CONSTSANTS = {
        description:
        "Bernie is blah blah description",
        highlights: {
            bullets:[
                "Bullet 1", 
                "Bullet 2",
                "Bullet 3",
                "Such is life",   
                "Such is life", 
                "Such is life", 
                "Such is life", 
                "Such is life", 
                "Such is life",   
             ],
          heading: "Here are a few highlights:",
        },
      };
      const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
          <div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
          </div>
        ));
      };
    return (
        <div className='about-me-container screen-container' id = {props.id || ""}>
             <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
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
