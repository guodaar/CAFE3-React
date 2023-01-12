import React from "react";
import "./RegistrationForm.scss";
import { useState } from "react";

const RegistrationForm = () => {
  const options = [
    { value: "", text: "Choose Option", disabled: true },
    { value: "wedding", text: "Wedding" },
    { value: "birthday", text: "Birthday" },
    { value: "graduation", text: "Graduation" },
  ];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [existingCustomer, setExistingCustomer] = useState("");

  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems((prevItems) => [
      ...prevItems,
      {
        firstName,
        lastName,
        company,
        email,
        areaCode,
        phoneNumber,
        selectedSubject,
        existingCustomer,
      },
    ]);
    setFirstName("");
    setLastName("");
    setCompany("");
    setEmail("");
    setAreaCode("");
    setPhoneNumber("");
    setSelectedSubject("");
    setExistingCustomer("");
    console.log(items);
  };

  return (
    <div className="main-wrapper">
      <h1>Event registration form</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="name">
          <label>Name</label>
          <div className="first-name input-wrap">
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <small className="input-label">First Name</small>
          </div>
          <div className="last-name input-wrap">
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <small className="input-label">Last Name</small>
          </div>
        </div>
        <div className="company">
          <label>Company</label>
          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </div>
        <div className="email">
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="example@email.com"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="phone">
          <label>Phone</label>
          <div className="area-code input-wrap">
            <input
              type="number"
              value={areaCode}
              onChange={(event) => setAreaCode(+event.target.value)}
            />
            <small className="input-label">Area Code</small>
          </div>
          <div className="phone-number input-wrap">
            <input
              type="number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(+event.target.value)}
            />
            <small className="input-label">Phone Number</small>
          </div>
        </div>
        <div className="subject">
          <label>Subject</label>
          <select
            value={selectedSubject}
            onChange={(event) => setSelectedSubject(event.target.value)}
          >
            {options.map((option) => (
              <option
                disabled={option.disabled}
                key={option.value}
                value={option.value}
              >
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <div className="bottom-wrapper">
          <div className="radio">
            <legend>Are you an existing customer?</legend>
            <div className="radio-buttons">
              <div className="radio-yes">
                <input
                  type="radio"
                  value="yes"
                  checked={existingCustomer === "Yes"}
                  onChange={() => setExistingCustomer("Yes")}
                />
                <label>Yes</label>
              </div>
              <div className="radio-no">
                <input
                  type="radio"
                  value="No"
                  checked={existingCustomer === "No"}
                  onChange={() => setExistingCustomer("No")}
                />
                <label>No</label>
              </div>
            </div>
          </div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
