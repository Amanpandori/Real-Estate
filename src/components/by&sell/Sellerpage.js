import "./Pages.css";
import seller from "./sellerpic.jpg";
import sellerpic from "./sellerpagepic.avif";
import React, { useState } from "react";

const Sellerpage = () => {
  return (
    <>
      <div className="sell__main">
        <div className="seller__heading">
          <h1>Do want to know what's your property worth?</h1>
        </div>
        <img src={seller} alt="something went wrong"></img>
      </div>
      <div className="seller__main">
        <div className="pic__box">
          <img src={sellerpic} alt="something went wrong"></img>
        </div>
        <div className="seller__form">
          <form>
            <h1>Get Your Home Estimation</h1>
            <div className="form__name">
              <div className="input-box">
                <label>First Name*</label>
                <input type="text" placeholder="First Name" required></input>
              </div>
              <div className="input-box">
                <label>Last Name*</label>
                <input type="text" placeholder="Last Name" required></input>
              </div>
            </div>
            <div className="form__number">
              <div className="input-box">
                <label>Email*</label>
                <input type="text" placeholder="Email" required></input>
              </div>
              <div className="input-box">
                <label>Phone Number*</label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  required
                ></input>
              </div>
            </div>
            <div className="form__city">
              <div className="input-box">
                <label>Country</label>
                <input type="text" placeholder="Country" required></input>
              </div>
              <div className="input-box">
                <label>State</label>
                <input type="text" placeholder="State" required></input>
              </div>
              <div className="input-box">
                <label>City</label>
                <input type="text" placeholder="City" required></input>
              </div>
            </div>
            <div className="form__address">
              <div className="input-box">
                <label>Address</label>
                <input type="text" placeholder="Address" required></input>
              </div>
              <div className="input-box">
                <label>Zip</label>
                <input type="text" placeholder="Zip" required></input>
              </div>
            </div>
            <label>Message</label>
            <textarea type="text" placeholder="Message"></textarea>
            <button type="submit">Send Email</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sellerpage;
