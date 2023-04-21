import React, { createContext, useState } from "react";

const FormContext = createContext({});
export function FormProvider({ children }) {
  //track step user is on
  const [step, setStep] = useState(0);
  //track user input
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    plan: { planName: "Arcade", planPrice: 9 },
    addOns: [],
    isMonthly: true,
  });

  const nextStep = () => {
//     if(formDetails.name||formDetails.email||formDetails.phone ===""){
// console.log("error");
//     }
//     else{
      setStep((next) => next + 1);
    // }
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };


  return (
    <FormContext.Provider
      value={{
        step,
        setStep,
        formDetails,
        setFormDetails,
        nextStep,
        prevStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
