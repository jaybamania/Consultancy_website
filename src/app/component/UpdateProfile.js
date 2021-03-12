import React, { useState, useEffect } from "react";
import { getUserDetails, updateUserDetails } from "../crud/auth.crud";
export default function UpdatePassword({ isVisible = true }) {
  const [ProfileDetails, setProfileDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    getUserDetails()
      .then((profile) => {
        setProfileDetails({
          first_name: profile.data.name,
          last_name: "",
          email: profile.data.email,
          phone: profile.data.phone,
        });
      })
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileDetails({ ...ProfileDetails, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUserDetails({
      first_name: ProfileDetails.first_name,
      last_name: ProfileDetails.last_name,
      phone: ProfileDetails.phone,
    }).then((profile) => {
      setProfileDetails({
        first_name: profile.data.name,
        last_name: "",
        email: profile.data.email,
        phone: profile.data.phone,
      });
    });
  };
  return (
    <form noValidate autoComplete="on" onSubmit={handleSubmit}>
      <div className="row" style={{ paddingBottom: "20px" }}>
        <div className="col">
          <label style={{ fontWeight: "bold" }} for="first_name">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            id="first_name"
            name="first_name"
            value={ProfileDetails.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label style={{ fontWeight: "bold" }} for="last_name">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            id="last_name"
            name="last_name"
            value={ProfileDetails.last_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label style={{ fontWeight: "bold" }} for="email">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            id="email"
            name="email"
            value={ProfileDetails.email}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label style={{ fontWeight: "bold" }} for="phone">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            id="phone"
            name="phone"
            value={ProfileDetails.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="btn btn-warning text-white" type="submit">
        SAVE
      </button>
    </form>
  );
}
