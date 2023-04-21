import "./step2.scss";
import Card from "../card/Card";
import { useContext, useState } from "react";
import FormContext from "../../contextAPI/FormContext";
import data from "../../Data";
import { Icon } from "@iconify/react";

export default function Step2() {
  const { plan, formDetails, setFormDetails } = useContext(FormContext);

  //change plan duration
  const changePlanDuration = () => {
    setFormDetails((prev) => ({
      ...prev,
      isMonthly: !formDetails.isMonthly,
    }));
  };

  const { addOns, plans } = data;

  //select plan
  const selectPlan = (e) => {
    setFormDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(formDetails);
  return (
    <div className="step2">
      <h3>Select your plan</h3>
      <p className="head_paragraph">
        You have the option of monthly and yearly billing
      </p>
      <div className="bill_wrapper">
        {plans.map((plan) => {
          return (
            <label
              htmlFor={plan.name}
              key={plan.name}
              className={`card_wrapper ${
                plan.name === formDetails.plan ? "active_plan" : null
              }`}
            >
              <input
                type="radio"
                id={plan.name}
                name="plan"
                value={plan.name}
                // checked={plan.name === formDetails.plan.planName}
                onChange={selectPlan}
              />
              <div className="image">
                <img src={plan.img} alt="" />
              </div>
              <div className="details">
                <p className="plan">
                  <strong> {plan.name}</strong>
                </p>
                <p className="price">
                  {" "}
                  {formDetails.isMonthly
                    ? `$${plan.monthlyPrice}/mo`
                    : `$${plan.yearlyPrice}/yr`}
                </p>
                {formDetails.isMonthly ? (
                  ""
                ) : (
                  <p className="duration">2 months free</p>
                )}
              </div>
            </label>
          );
        })}
      </div>
      <div className="select_duration">
        <span className={formDetails.isMonthly ? "active_text" : ""}>
          Monthly
        </span>{" "}
        <span onClick={changePlanDuration}>
          <Icon
            icon={
              formDetails.isMonthly
                ? "fontisto:toggle-off"
                : "fontisto:toggle-on"
            }
            color="hsl(213, 96%, 18%)"
            width="30"
            height="30"
          />
        </span>
        <span className={formDetails.isMonthly ? "" : "active_text"}>
          Yearly
        </span>
      </div>
    </div>
  );
}
