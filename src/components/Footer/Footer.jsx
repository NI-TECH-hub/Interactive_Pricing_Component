import React from "react";
import iconcheck from "../../images/icon-check.svg";

const Footer = (props) => {
    return (
      <li>
        <img src={iconcheck} alt=""></img>{props.features}
      </li>
    );
}

export default Footer;