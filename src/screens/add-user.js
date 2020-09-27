import React, { Component } from "react";
import "./style.css";

class AddUser extends Component {
  componentDidMount() {
    window.addEventListener("popstate", this.onBackButtonEvent);
  }
  onBackButtonEvent = (e) => {
    e.preventDefault();
    if (!this.isBackButtonClicked) {
      if (window.confirm("Do you want to save your changes")) {
        this.isBackButtonClicked = true;
        // your custom logic to page transition,like react-router-dom history.push()
      } else {
        window.history.pushState(null, null, window.location.pathname);
        this.isBackButtonClicked = false;
      }
    }
  };
  componentWillUnmount = () => {
    window.removeEventListener("popstate", this.onBackButtonEvent);
  };
  render() {
    return (
      <div className="container">
        <div className="add-user-container">
          <div className="add-user-form">
            <h2>RSVP To Attend</h2>
            <div className="input-container">
              <label className="input-label">* Name</label>
              <input
                className="input-text"
                placeholder="Write your name here"
                type="text"
              />
            </div>
            <div className="input-container">
              <label className="input-label">* Age (min 20 years)</label>
              <input
                className="input-text"
                placeholder="Your age (min 20 years)"
                type="number"
                min="20"
                max="100"
              />
            </div>
            <div className="input-container">
              <label className="input-label">* DOB</label>
              <input
                className="input-text"
                placeholder="Your date of birth"
                type="date"
                min="2001-01-01"
                max="2050-12-31"
              />
            </div>
            <div className="input-container">
              <label className="input-label">* Profession</label>
              <select>
                <option>Employee</option>
                <option>Student</option>
              </select>
            </div>
            <div className="input-container">
              <label className="input-label">* Locality</label>
              <input
                className="input-text"
                placeholder="Your locality"
                type="text"
              />
            </div>
            <div className="input-container">
              <label className="input-label">
                * Number of Guests (between 0-2)
              </label>
              <input
                className="input-text"
                placeholder="Number of Guests (between 0-2)"
                type="number"
                min="0"
                max="2"
              />
            </div>
            <div className="input-container">
              <label className="input-label">
                * Address (max 50 characters)
              </label>
              <textarea
                style={{ resize: "none" }}
                placeholder="Your address (max 50 characters)"
              ></textarea>
            </div>
            <div className="input-container">
              <button className="register-button">Register</button>
            </div>
          </div>
          <div className="info-text-container">
            <h1>React Meetup Online</h1>
            <p className="info-text">
              Introducing our first online React meetup...
            </p>
            <p className="info-text">
              Join us for React-specific talks every month in the comfort of
              your own home -- <em>where ever you are in the world!&nbsp;</em>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default AddUser;
