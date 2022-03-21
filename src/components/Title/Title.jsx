import React from "react";

const TitleComponent =(props) => {
    return (
      <div class="title">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required. </p>
        <br></br>

        <div className="billing">
          <label class="switch">
            <input
              type="checkbox"
              name="billing"
              id="billing"
              onClick={props.themeChangeToggler}
            ></input>
            <span class="toggle-slider"></span>
          </label>
          <p>Dark Mode</p>
        </div>
      </div>
    );
}

export default TitleComponent;

