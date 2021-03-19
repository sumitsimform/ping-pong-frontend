import React from "react";
import Score from "components/Score/Score";

const Scorepage = () => {
  return (
    <div className="LoginpageStyles main-bg">
      <div className="auth-box-container">
        <div className="auth-main-wrapper">
          <div className="auth-wrapper">
            <div className="authBox">
              <Score />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorepage;
