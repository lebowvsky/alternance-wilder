import React, { useState } from "react";
import axios from "axios";

const WilderForm = ({ isForm, closeTheForm }) => {

  const [wilderName, setWilderName] = useState("");
  const [city, setCity] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/wilders", { name: wilderName, city: city });
      closeTheForm()
    } catch (err) {
      console.log(err);
    }
  };

  const handleWilderName = (e) => {
    setWilderName(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className={`form-page ${isForm ? "show" : ""}`}>
      <div className="fp-wrapper">
        <form className="form" onSubmit={onSubmitForm}>
          <div className="input-wrapper">
            <label htmlFor="input-name" className="iw-label-name">
              Wilder
            </label>
            <br />
            <input
              id="input-name"
              name="wilder-name"
              type="text"
              className="iw-name"
              onChange={handleWilderName}
              value={wilderName}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="input-city" className="iw-label-city">
              Ville
            </label>
            <br />
            <input
              id="input-city"
              name="wilder-city"
              type="text"
              className="iw-city"
              onChange={handleCity}
              value={city}
            />
          </div>
          <div className="input-wrapper">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
        <button className="f-close" onClick={closeTheForm}></button>
      </div>
      
    </div>
  );
};

export default WilderForm;
