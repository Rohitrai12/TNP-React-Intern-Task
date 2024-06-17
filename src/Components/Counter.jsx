import React, { useEffect, useState } from "react";
import "../../src/Clounter.css";
import LinkedInIcon from "../../src/assets/linkedin.png";
import InstagramIcon from "../../src/assets/instagram-logo.png";
import TwitterIcon from "../../src/assets/twitter.png";

function Counter() {
  const [count, setCount] = useState(0);
  const [followers, setFollowers] = useState(6000); 

  useEffect(() => {
    const updateCount = () => {
      const end = Math.min(followers, 7000); 
      const duration = 1000; 
      const increment = Math.ceil(end / (duration / 50));

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          clearInterval(timer);
          current = end; 
        }
        setCount(current);
      }, 50);

      return () => clearInterval(timer);
    };

    if (typeof followers === "number" && followers > 0) {
      updateCount();
    }

  }, [followers]);

  return (
    <div className="counter">
      <h2>VAST COMMUNITY OF STUDENTS</h2>
      <div className="followers">
        <div className="follower-item">
          <img src={LinkedInIcon} alt="LinkedIn" className="icon" />
          <div className="social-info">
            <h3>LinkedIn</h3>
            <p>{count}+</p>
          </div>
        </div>
        <div className="follower-item">
          <img src={InstagramIcon} alt="Instagram" className="icon" />
          <div className="social-info">
            <h3>Instagram</h3>
            <p>{count}+</p>
          </div>
        </div>
        <div className="follower-item">
          <img src={TwitterIcon} alt="Twitter" className="icon" />
          <div className="social-info">
            <h3>Twitter</h3>
            <p>{count}+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
