import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* different states */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* components on left of resume (categories) */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    )
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Certifications", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "C#", ratingPercentage: 90 },
    { skill: "JavaScript", ratingPercentage: 72 },
    { skill: "React JS", ratingPercentage: 83 },
    { skill: "React Native", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 89 },
    { skill: "Core Java", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 82 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const certificationsDetails = [
    {
      title: "Certified Cryptocurrency Auditor (CCA)",
     /* duration: { fromDate: "1", toDate: "2" },*/
      description:
        "Certified Cryptocurrency Auditor™ is an exclusively developed and curated certification focusing on the core concepts of auditing Blockchain-based Cryptocurrencies.",
        credLink: ""
    },
    {
        title: "AccessData Certified Examiner, Investigator, Technician (ACE, ACI, ACT)",
       /* duration: { fromDate: "1", toDate: "2" },*/
        description:
          "This certifies users with the combined abilities of AccessData's Forensic Toolkit (FTK), FTK Imager, Registry Viewer, and Password Recovery Toolkit® (PRTK®) to locate and examine email messages, deleted files, free space and file slack.",
        
      }, 
      {
        title: "Open-Source Intelligence (OSINT) Fundamentels ",
       /* duration: { fromDate: "1", toDate: "2" },*/
        description:
          "This course focuses on Open Source Intelligence (OSINT) tactics and techniques designed to help you improve your investigative game.",
        subHeading: "P2",
      },  

  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"North West University, Potchefstroom, South Africa"}
        subHeading={"Bachelor of Science Information Technology"}
        fromDate={"2019"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"North West University, Potchefstroom, South Africa"}
        subHeading={"Honors of Commerse Forensic Accounting"}
        fromDate={"2019"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"North West University, Potchefstroom, South Africa"}
        subHeading={"Bachelor of Commerse Forensic Accounting"}
        fromDate={"2016"}
        toDate={"2018"}
      />
    </div>,
    

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Cyanre The Digital Forensic Lab"}
          subHeading={"Digital Forensic Practitioner"}
          fromDate={"Feb 2021 "}
          toDate={" Present"}
        />
        
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working ...
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - F1.
          </span>
          <br />
          <br />

          <ResumeHeading
          heading={"TFS Africa"}
          subHeading={"Forensic Investigator"}
          fromDate={"Sept 2020 "}
          toDate={" Apr 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working ...
          </span>
          <br />
          <br />
        </div>

        <ResumeHeading
          heading={"ICA Consulting"}
          subHeading={"Junior Forensic Assistant"}
          fromDate={"Jan 2020 "}
          toDate={" Aug 2020"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            Currently working ...
          </span>
          <br />
        </div>

        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Certifications */
    <div className="resume-screen-container" key="certifications">
      {certificationsDetails.map((certificationsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={certificationsDetails.title}
          description={certificationsDetails.description}
          credLink ={certificationsDetails.credLink}
         /* description={certificationsDetails.description}
          fromDate={certificationsDetails.duration.fromDate}
          toDate={certificationsDetails.duration.toDate}*/
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Music"
        description="Apart from being a data and fraud analyst, i love playing guitar and drums. I also write and record songs in my free time."
      />
      <ResumeHeading
        heading="Cooking"
        description="I like cooking because"
      />
      <ResumeHeading
        heading="Fishing"
        description="I like "
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* unsub to subscription */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in" id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
