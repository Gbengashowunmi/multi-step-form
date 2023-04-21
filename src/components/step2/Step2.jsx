import "./step2.scss";
import Card from "../card/Card";
import { useContext, useState } from "react";
import FormContext from "../../contextAPI/FormContext";
import data from "../../Data";

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
      <p>You have the option of monthly and yearly billing</p>
      <div className="bill_wrapper">
        {plans.map((plan) => {
          return (
            <div
              className={`card_wrapper ${
                plan.name === formDetails.plan ? "active_plan" : null
              }`}
            >
              <input
                type="radio"
                name="plan"
                value={plan.name}
                checked={plan.name === formDetails.plan}
                onChange={selectPlan}
              />
              <div className="icon">Icon</div>
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
            </div>
          );
        })}
      </div>
      <div className="select_duration">
        <span className={formDetails.isMonthly ? "active_text" : ""}>
          Monthly
        </span>{" "}
        <button onClick={changePlanDuration}></button>{" "}
        <span className={formDetails.isMonthly ? "" : "active_text"}>
          Yearly
        </span>
      </div>
    </div>
  );
}
