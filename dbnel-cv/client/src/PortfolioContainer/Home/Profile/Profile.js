import React from "react";
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css';


export default function Profile() {
    return (
        <div className="profile-container">
          <div className="profile-parent">
            <div className="profile-details">
              <div className="colz">
                <div className="colz-icon">
                  <a href="https://www.facebook.com/berniegecko.nel/">
                  <i class='fa fa-facebook-square'></i>
                  </a>
                  <a href="https://www.linkedin.com/in/bernie-nel/">
                    <i className="fa fa-linkedin-square" />
                  </a>
                  <a href="https://www.instagram.com/berniegecko/">
                    <i className="fa fa-instagram" />
                  </a>
                  
                </div>
                </div>

              <div className= "profile-details-name">
                  <span className="primary-text">
                      {" "}
                      Hello, I'm <span className="highlighted-text"> Bernie</span>
                  </span>
              </div>
              <div className="profile-details-role">
                  <span className='profile-details-role'>
                      {" "}
                      <h1>
                        {" "}
                        Digital Forensic Investigator 
                      </h1>
                      <span className='profile-role-tagline'>
                        Combating digital fraud, one case at a time
                       </span>
                  </span>
              </div>


            <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="Daniel Bernie Nel CV.pdf" download="Daniel Bernie Nel CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
    
  );
        
    
}
