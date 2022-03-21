import React from "react";
// import Switch from "../switch/Switch";

const Billing = ({ toggleBill }) => {
  return (
    <div class="billing">
      <p>Monthly Billing</p>
      <label class="switch">
        <input
          type="checkbox"
          name="billing"
          id="billing"
          onClick={() => toggleBill()}
        ></input>
        <span class="toggle-slider"></span>
      </label>
      {/* <Switch /> */}
      <p>Yearly Billing</p>
      <p class="discount">25% discount</p>
      <p class="discount discount2">25%</p>
    </div>
  );
};

export default Billing;
