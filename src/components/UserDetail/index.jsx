import React from "react";
import { Col } from "react-bootstrap";
import Countries from "./countries.json";
import "./index.scss";

export default function UserDetail({ register }) {
  return (
    <Col xs={12} className="userDetailSection">
      <div className="formInputGroup">
        <div className="formInput">
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              id="firstName"
              ref={register()}
            />
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              id="lastName"
              ref={register()}
            />
          </label>
        </div>
      </div>
      <div className="formInputGroup">
        <div className="formInput">
          <label htmlFor="nationality">
            Nationality
            <input
              type="text"
              placeholder="Your nationality"
              name="nationality"
              id="nationality"
              ref={register()}
            />
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="phoneNumer">
            Phone Number
            <input
              type="tel"
              placeholder="+90 552 477 25 15"
              name="phoneNumber"
              id="phoneNumber"
              ref={register()}
            />
          </label>
        </div>
      </div>

      <div className="formInputGroup">
        <div className="formInput">
          <label htmlFor="sex">
            Sex
            <select name="sex" id="sex" ref={register()}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="birthdate">
            Birthdate
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              ref={register()}
            />
          </label>
        </div>
      </div>

      <div className="formInput">
        <label htmlFor="address">
          Address
          <input
            type="text"
            placeholder="1234 UTK  str.  Dumplinar Mah."
            name="address"
            id="address"
            ref={register()}
          />
        </label>
      </div>

      <div className="formInputGroup">
        <div className="formInput">
          <label htmlFor="city">
            City
            <input
              type="text"
              placeholder="Bursa"
              name="city"
              id="city"
              ref={register()}
            />
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="state">
            State
            <input
              type="text"
              placeholder="Nilufer"
              name="state"
              id="state"
              ref={register()}
            />
          </label>
        </div>
      </div>

      <div className="formInputGroup">
        <div className="formInput">
          <label htmlFor="zipCode">
            ZIP Code
            <input
              type="text"
              placeholder="12345"
              name="zipCode"
              id="zipCode"
              ref={register()}
            />
          </label>
        </div>

        <div className="formInput">
          <label htmlFor="country">
            Country
            <select name="countryCode" id="country" ref={register()}>
              <option value="">--Please choose your country--</option>
              {Countries.map((country) => (
                <option key={country.id} value={country.alpha2}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </Col>
  );
}
