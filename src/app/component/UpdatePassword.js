import React, { useState } from "react";
import { changeUserPassword } from "../crud/auth.crud";
export default function UpdatePassword({ isVisible = true }) {
  const [passwords, setPasswords] = useState({
    password: "",
    newPassword: "",
    cPassword: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPasswords({ ...passwords, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    changeUserPassword({
      new: passwords.cPassword,
      current: passwords.password,
    });
  };
  return (
    <form noValidate autoComplete="on" onSubmit={handleSubmit}>
      <div className="form-group row">
        <div className="col">
          <label for="password">Enter Current Password</label>
        </div>
        <div className="col">
          <input
            className="form-control"
            type="password"
            placeholder={"Password*"}
            id="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col">
          <label for="newPassword">Enter New Password</label>
        </div>
        <div className="col">
          <input
            className="form-control"
            type="password"
            placeholder={"Password*"}
            id="newPassword"
            name="newPassword"
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col">
          <label for="cPassword">Confirm New Password</label>
        </div>
        <div className="col">
          <input
            className="form-control"
            type="password"
            placeholder={"Confirm Password*"}
            id="cPassword"
            name="cPassword"
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        className="btn btn-warning text-white"
        type="submit"
        disabled={
          !(
            passwords.password !== "" &&
            passwords.cPassword !== "" &&
            passwords.newPassword !== "" &&
            passwords.newPassword === passwords.cPassword
          )
        }
      >
        SAVE
      </button>
    </form>
  );
}
