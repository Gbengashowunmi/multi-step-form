import "./step3.scss";
import AdOnCard from "../ad-on-card/AdOnCard";
import FormContext from "../../contextAPI/FormContext";
import { useContext, useState } from "react";
import data from "../../Data";

export default function Step3() {
  const { plan, formDetails, setFormDetails, isMonthly } =
    useContext(FormContext);
  const [chooseAdOns, setChooseAdOns] = useState([]);

  // const changePlanDuration = () => {
  //   setMonthlyPlan(!monthlyPlan);
  //   // console.log(monthlyPlan);
  // };

  const { addOns, plans } = data;

  const selectAdons = (e) => {
    setFormDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(formDetails.plan);

  const handleChange = (e) => {
    const isAlreadyChecked = formDetails.addOns.some(
      (item) => item.addOnName === e.target.value
    );

    if (isAlreadyChecked) {
      const newArr = formDetails.addOns.filter(
        (item) => item.addOnName !== e.target.value
      );
      setFormDetails((prev) => ({ ...prev, addOns: newArr }));
    } else {
      const addOnInfo = addOns.filter(
        (item) => item.name === e.target.value
      )[0];
      const setPrice = isMonthly
        ? addOnInfo.monthlyPrice
        : addOnInfo.yearlyPrice;
      setFormDetails((prev) => ({
        ...prev,
        addOns: [
          ...prev.addOns,
          {
            addOnName: e.target.value,
            addOnPrice: setPrice,
          },
        ],
      }));
    }
  };

  console.log(formDetails);
  return (
    <div>
      <h3>Pick add-ons</h3>
      <p className="head_paragraph">
        Ad-ons help enhance your gaming experience.
      </p>
      <div className="ad_on_card_container">
        {addOns.map((addOn) => {
          return (
            <div className="ad_on_card_wrapper">
              <input
                type="checkbox"
                value={addOn.name}
                // checked={formDetails.addOns?.some(
                //   (item) => item.addOnName === addOn.name
                // )}
                name="addOn"
                onChange={(e) => handleChange(e)}
              />
              <div className="details">
                <p>
                  <strong>{addOn.name}</strong>
                </p>
                <p>{addOn.description}</p>
              </div>
              <p>
                {formDetails.isMonthly
                  ? `$${addOn.monthlyPrice}/mo`
                  : `$${addOn.yearlyPrice}/yr`}
              </p>
            </div>
          );
        })}
        {/* <AdOnCard />
        <AdOnCard />
        <AdOnCard /> */}
      </div>
    </div>
  );
}
