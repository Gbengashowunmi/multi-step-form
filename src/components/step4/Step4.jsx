import { useContext } from "react";
import "./step4.scss";
import FormContext from "../../contextAPI/FormContext";

export default function Step4() {
  const { plan, formDetails, setFormDetails } = useContext(FormContext);
  console.log(formDetails);
  return (
    <div className="step4">
      <h3>Finishing up</h3>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="summary">
        <div className="plan">
          <p>
            {formDetails.plan.planName}
            {formDetails.isMonthly ? "(Monthly)" : "(Yearly)"}
          </p>
          <p>
            {`${formDetails.plan.planPrice}${
              formDetails.isMonthly ? "/mo" : "/yr"
            }`}
          </p>
        </div>
        <hr />
        <div className="selected_ad_ons">
          {formDetails.addOns.map((addOn) => {
            return (
              <div className="add_on_details">
                <p>{addOn.addOnName}</p>
                <p>{addOn.addOnPrice}/mo</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="total">
        <p>Total (per month)</p>
        <p>
          <strong>+$12/mo</strong>
        </p>
      </div>
    </div>
  );
}
