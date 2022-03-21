import React from "react";
import "../Price/Price.css";

class Pricing extends React.Component {
  state = {
    priceInputValue: "0",
    priceInput: {
      0: "10k",
      1: "50k",
      2: "100k",
      3: "500k",
      4: "1M",
    },
    priceOutput: {
      plan1: {
        0: ["$", "8", ""],
        1: ["$", "12", ""],
        2: ["$", "16", ""],
        3: ["$", "24", ""],
        4: ["$", "36", ""],
      },
      plan2: {
        0: ["$", "6", ""],
        1: ["$", "9", ""],
        2: ["$", "18", ""],
        3: ["$", "12", ""],
        4: ["$", "27", ""],
      },
    },
  };

  slider = React.createRef();

  componentDidMount() {
    this.slider.current.setAttribute("min", 0);
    this.slider.current.setAttribute(
      "max",
      Object.keys(this.state.priceInput).length - 1
    );
  }

  handlePricingSlide = (e) => {
    this.setState({ priceInputValue: e.target.value });
  };

  getPricingData = (obj, pos) => {
    return pos !== undefined
      ? obj[this.state.priceInputValue][pos]
      : obj[this.state.priceInputValue];
  };

  render() {
    return (
      <>
        {/* top bar  */}

        <div class="packages">
          <div class="pv">
            <p>
              <div ref={this.sliderValue} className="pricing-slider-value">
                {this.getPricingData(this.state.priceInput)} PageViews
              </div>
            </p>
          </div>
          <div class="cst">
            <p>
              {/* $<span id="cost">16</span>.00 */}
              <div className="cst">
                <span id="cost">
                  {this.getPricingData(
                    this.props.val === 1
                      ? this.state.priceOutput.plan1
                      : this.state.priceOutput.plan2,
                    0
                  )}
                </span>
                <span className="pricing-item-price-amount">
                  {this.getPricingData(
                    this.props.val === 1
                      ? this.state.priceOutput.plan1
                      : this.state.priceOutput.plan2,
                    1
                  )}
                </span>
                {this.getPricingData(
                  this.props.val === 1
                    ? this.state.priceOutput.plan1
                    : this.state.priceOutput.plan2,
                  2
                )}
              </div>
            </p>
            <p class="time">{this.props.val === 1 ? "/month" : "/year"}</p>
          </div>
        </div>

        {/*  */}
        <div className="range-slider">
          <div className="pricing-slider center-content">
            <label className="form-slider">
              <input
                type="range"
                id="price-slider"
                class="range"
                ref={this.slider}
                defaultValue={this.state.priceInputValue}
                onChange={this.handlePricingSlide}
              />
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default Pricing;
