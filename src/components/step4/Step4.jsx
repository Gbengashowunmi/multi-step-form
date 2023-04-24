import { useContext } from "react";
import "./step4.scss";
import FormContext from "../../contextAPI/FormContext";

export default function Step4() {
  const { formDetails } = useContext(FormContext);
  console.log(formDetails.isMonthly);
  const totalAddOnPrice = formDetails.addOns.map((addOn) => {
    return addOn.addOnPrice;
  });

  const totalPrice =
    formDetails.plan.planPrice + totalAddOnPrice.reduce((a, b) => a + b, 0);

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
          {formDetails.addOns.length <= 0 ? (
            <p className="error">
              No addOn selected. To choose an AddOn, please go back to the
              previous step (step3)
            </p>
          ) : (
            formDetails.addOns.map((addOn) => {
              return (
                <div className="add_on_details" key={addOn.addOnName}>
                  <p>{addOn.addOnName}</p>
                  <p>
                    {addOn.addOnPrice}/{formDetails.isMonthly ? `mo` : `yr`}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className="total">
        <p>Total (per {formDetails.isMonthly ? `month` : `year`})</p>
        <p>
          <strong>
            +${totalPrice}/{formDetails.isMonthly ? `mo` : `yr`}
          </strong>
        </p>
      </div>
    </div>
  );
}
