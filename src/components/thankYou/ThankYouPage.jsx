import React from "react";
import thankYou from "../../assets/images/icon-thank-you.svg"
import "./thankyou.scss"
export default function ThankYouPage() {
  return (
    <div className="thank_you">
      <div className="image">
        <img src={thankYou} alt="" />
      </div>
      <h3>Thank You!</h3>
      <p>
        Thanks for confirming your subscription! I hope you have fun trying out
        my multi step form. If you ever need support, feel free to email me at
        gbengalilmahn@gmail.com
      </p>
    </div>
  );
}
