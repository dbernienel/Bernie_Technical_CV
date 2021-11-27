import React from "react";
import './Profile.css';


export default function Profile() {
    return (
        <div className="profile-container">
          <div className="profile-parent">
            <div className="profile-details">
              <div className="colz">
                <div className="colz-icon">
                  <a href="https://web.facebook.com/">
                  <i class='fab fa-facebook-square'></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fa fa-google-plus-square" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fa fa-youtube-square" />
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fa fa-twitter" />
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
            <button className="btn primary-btn"> 
            {" "}
            
            Hire Me {""} 
            </button>
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
