import React, { useState } from "react";
import "./App.css";
import Billing from "./components/Billing/Billing";
import Footer from "./components/Footer/Footer";
import TitleComponent from "./components/Title/Title";
import Package from "./components/Package/Package";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Themes/globalStyles";
import { darkTheme, lightTheme } from "./components/Themes/Theme";
import Pricing from "./components/Price/Price";


function App() {
  const [theme, setTheme] = useState("light");
  const [billingType, setBillingType] = useState(1);
  const themeChangeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const toggleBillHandler = () => {
    if (billingType == 1) setBillingType(2);
    else setBillingType(1);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <TitleComponent themeChangeToggler={themeChangeToggler} />
      <div class="container">
        <div class="wrapper">
          <div class="top-content">
            <Package />
            <Pricing val={billingType} />
            <Billing toggleBill={toggleBillHandler} />
          </div>
          <hr></hr>
          <div class="footer">
            <ul>
              <Footer features="Unlimited websites" />
              <Footer features="100% data ownership" />
              <Footer features="Email reports" />
            </ul>
            <a href="#">Start my trial</a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
