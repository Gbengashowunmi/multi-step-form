import { useContext } from "react";
import "./step1.scss";
import FormContext from "../../contextAPI/FormContext";

export default function Step1({error}) {
  const { formDetails, setFormDetails } = useContext(FormContext);
  // console.log(error);
  const handleInput = (e) => {
    setFormDetails((prev) =>({
      ...prev,  [e.target.name]: e.target.value,
    }));

  };
  return (
    <div>
      <h3>Personal Info</h3>
      <p className="head_paragraph">
        Please provide your name, email address, and phone number.
      </p>
      <form>
        <span className="input_head">
          <label htmlFor="name">Name</label>
          <p className="error">{error.name && error.name}</p>
        </span>
        <input
          type="text"
          placeholder="e.g. Gbenga Showunmi"
          value={formDetails.name}
          onChange={handleInput}
          name="name"
          className={error.name ? "input_error" : ""}
        />
        <span className="input_head">
          <label htmlFor="email">Email Address</label>
          <p className="error">{error.email && error.email}</p>
        </span>
        <input
          type="email"
          placeholder="gbengashowunmi01@gmail.com"
          value={formDetails.email}
          onChange={handleInput}
          name="email"
          className={error.email ? "input_error" : ""}
        />
        <span className="input_head">
          <label htmlFor="phone">Phone Number</label>
          <p className="error">{error.phone && error.phone}</p>
        </span>
        <input
          type="tel"
          placeholder="e.g. +234 8135110104"
          value={formDetails.phone}
          onChange={handleInput}
          name="phone"
          className={error.phone ? "input_error" : ""}
        />
      </form>
    </div>
  );
}
