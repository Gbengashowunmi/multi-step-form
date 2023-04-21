import { useContext } from "react";
import "./step1.scss";
import FormContext from "../../contextAPI/FormContext";

export default function Step1() {
  const { formDetails, setFormDetails } = useContext(FormContext);
  
  const handleInput = (e) => {
    setFormDetails((prev) =>({
      ...prev,  [e.target.name]: e.target.value,
    }));

  };
  return (
    <div>
      <h3>Personal Info</h3>
      <p>Please provide your name, email address, and phone number.</p>
      <form>
        <label htmlFor="name">name</label>
        <input
          type="text"
          placeholder="e.g. Gbenga Showunmi"
          value={formDetails.name}
          onChange={handleInput}
          name="name"
        />
        <label htmlFor="name">Email Address</label>

        <input
          type="text"
          placeholder="gbengashowunmi01@gmail.com"
          value={formDetails.email}
          onChange={handleInput}
          name="email"
        />
        <label htmlFor="phone">Phone Number</label>

        <input
          type="text"
          placeholder="e.g. +234 8135110104"
          value={formDetails.phone}
          onChange={handleInput}
          name="phone"
        />
      </form>
    </div>
  );
}
