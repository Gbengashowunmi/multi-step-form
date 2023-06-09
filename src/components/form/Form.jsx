import { useContext, useState } from "react";
import Step1 from "../step1/Step1";
import Step2 from "../step2/Step2";
import Step3 from "../step3/Step3";
import Step4 from "../step4/Step4";
import "./form.scss";
import FormContext from "../../contextAPI/FormContext";
import ThankYouPage from "../thankYou/ThankYouPage";
import { Icon } from "@iconify/react";

export default function Form() {
  //usecontext values
  const { formDetails } = useContext(FormContext);


  const [step, setStep] = useState(0);
  const FormTitles = ["step1", "step2", "step3", "step4", "step5"];

  //set erros
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
  });

  const validateEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


  // validate input before going to the next step 
  const nextStep = () => {
    if (formDetails.name === "") {
      setError((prev) => ({ ...prev, name: "Enter Your Name" }));
    } else if (formDetails.email === "") {
      setError((prev) => ({ ...prev, email: "Enter Your Email" }));
    } else if (!validateEmail.test(formDetails.email)) {
      setError((prev) => ({ ...prev, email: "Invalid Email Address" }));
    } else if (formDetails.phone === "") {
      setError((prev) => ({ ...prev, phone: "Enter Your Phone Number" }));
    } else if (formDetails.plan === {}) {
      setError((prev) => ({ ...prev, plan: "Please select a plan" }));
    } else {
      setStep((next) => next + 1);
    } 
  };

  //go back to next step
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  
  const StepDisplay = () => {
    if (step === 0) {
      return <Step1 error={error} setError={setError} />;
    } else if (step === 1) {
      return <Step2 error={error} setError={setError} />;
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
      <section className="steps">
        <ul>
          <li>
            <p className={`bulletin ${step === 0 ? "active_step" : ""}`}>1</p>
            <div className="step_description">
              <p>STEP 1</p>
              <p className="step_title">YOUR INFO</p>
            </div>
          </li>
          <li>
            <p className={`bulletin ${step === 1 ? "active_step" : ""}`}>2</p>
            <div className="step_description">
              <p>STEP 2</p>
              <p className="step_title">YOUR INFO</p>
            </div>
          </li>
          <li>
            <p className={`bulletin ${step === 2 ? "active_step" : ""}`}>3</p>
            <div className="step_description">
              <p>STEP 3</p>
              <p className="step_title">YOUR INFO</p>
            </div>
          </li>
          <li>
            <p className={`bulletin ${step === 3 ? "active_step" : ""}`}>4</p>
            <div className="step_description">
              <p>STEP 4</p>
              <p className="step_title">YOUR INFO</p>
            </div>
          </li>
          <li>
            <p className={`bulletin ${step === 4 ? "active_step" : ""}`}>5</p>
            <div className="step_description">
              <p>STEP 5</p>
              <p className="step_title">YOUR INFO</p>
            </div>
          </li>
        </ul>
      </section>
      <div className="form_display">
        <section className="">{StepDisplay()}</section>
        <div className="buttons">
          <button hidden={step === 0} onClick={prevStep} className="prev">
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
