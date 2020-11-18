import React from "react";
import { Col } from "react-bootstrap";
import countries from "./countries.json";
import Input from "../../form/Input";
import "./index.scss";

export default function UserDetail({ register }) {
  return (
    <Col xs={12} className="userDetailSection">
      <div className="formInputGroup">
        <Input
          type="text"
          placeholder="Your first name"
          name="firstName"
          ref={register()}
          label="Your first Name"
        />

        <Input
          type="text"
          placeholder="Your last name"
          name="lastName"
          ref={register()}
          label="Last Name"
        />
      </div>

      <div className="formInputGroup">
        <Input
          type="text"
          placeholder="Your nationality"
          name="nationality"
          label="Your nationality"
          ref={register()}
        />

        <Input
          type="tel"
          placeholder="+90 552 477 25 15"
          name="phoneNumber"
          label="Phone Number"
          ref={register()}
        />
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

        <Input
          type="date"
          name="birthdate"
          id="birthdate"
          label="Birthdate"
          ref={register()}
        />
      </div>

      <Input
        type="text"
        placeholder="1234 UTK  str.  Dumplinar Mah."
        name="address"
        label="Address"
        ref={register()}
      />

      <div className="formInputGroup">
        <Input
          type="text"
          placeholder="Bursa"
          name="city"
          label="City"
          ref={register()}
        />

        <Input
          type="text"
          placeholder="Nilufer"
          name="state"
          label="State"
          ref={register()}
        />
      </div>

      <div className="formInputGroup">
        <Input
          type="text"
          placeholder="12345"
          name="zipCode"
          label="ZIP Code"
          ref={register()}
        />

        <div className="formInput">
          <label htmlFor="country">
            Country
            <select name="countryCode" id="country" ref={register()}>
              <option value="">Please choose your country</option>
              {countries.map((country) => (
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
