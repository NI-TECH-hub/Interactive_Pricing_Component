import React from "react";

const Switch = (props) => {
    return (
      <label class="switch">
        <input type="checkbox" name="billing" id="billing" onClick={props.Theme}></input>
        <span class="toggle-slider"></span>
      </label>
    );
}

export default Switch;