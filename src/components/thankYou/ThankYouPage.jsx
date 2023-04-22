import React, { useContext } from "react";
import thankYou from "../../assets/images/icon-thank-you.svg";
import "./thankyou.scss";
import FormContext from "../../contextAPI/FormContext";
export default function ThankYouPage() {
  const { formDetails } = useContext(FormContext);
  const name = formDetails.name.split(" ")[0];
  const planName = formDetails.plan.planName;

  return (
    <div className="thank_you">
      <div className="image">
        <img src={thankYou} alt="" />
      </div>
      <h3>Thank You!</h3>
      <p> Dear
        <span>
          <strong> {`${name}`}</strong>, 
        </span>
         thanks for confirming your subscription! You chose a
        <span>
          <strong>
            {formDetails.isMonthly ? ` Monthly ` : ` Yearly `}
            {`${planName} `}
          </strong>
        </span>
        plan. I hope you have fun trying out my multi step form. If you ever
        need support, feel free to email me at gbengalilmahn@gmail.com
      </p>
    </div>
  );
}
