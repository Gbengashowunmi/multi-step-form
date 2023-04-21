import { useContext, useState } from "react";
import Step1 from "../step1/Step1";
import Step2 from "../step2/Step2";
import Step3 from "../step3/Step3";
import Step4 from "../step4/Step4";
import "./form.scss";
import FormContext from "../../contextAPI/FormContext";
import ThankYouPage from "../thankYou/ThankYouPage";

export default function Form() {
  //usecontext values
  const { step, setStep, nextStep, prevStep, formDetails, setFormDetails } =
    useContext(FormContext);

  const FormTitles = ["step1", "step2", "step3", "step4", "step5"];

  const StepDisplay = () => {
    if (step === 0) {
      return (
        <Step1 formDetails={formDetails} setFormDetails={setFormDetails} />
      );
    } else if (step === 1) {
      return <Step2 />;
    } else if (step === 2) {
      return <Step3 />;
    } else if (step === 3) {
      return <Step4 />;
    } else if (step === 4) {
      return <ThankYouPage />;
    }
  };

  return (
    <div className="form">
      <section className="steps"></section>
      <div>
        <section className="form_display">{StepDisplay()}</section>
        <div className="buttons">
          <button
            hidden={step === 0 || FormTitles.length - 1}
            onClick={prevStep}
            className="prev"
          >
            Go back
          </button>
          <button
            hidden={step === FormTitles.length - 1}
            onClick={step == FormTitles.length - 1 ? "" : nextStep}
            className="next"
          >
            {step == FormTitles.length - 2 ? "Confirm" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
