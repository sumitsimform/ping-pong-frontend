import React from "react";
import Login from "components/Login/Login";


const Loginpage = () => {
  return (
    <div className="LoginpageStyles main-bg">
      <div className="auth-box-container">
        <div className="auth-main-wrapper">
          <div className="auth-wrapper">
            <div className="authBox">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
