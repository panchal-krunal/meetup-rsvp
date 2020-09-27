import React, { Component } from "react";
import "./style.css";
import moment from "moment";
import axios from "axios";
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: "",
      dob: "",
      locality: "",
      address: "",
      numberOfGuest: "",
      profession: "",
    };
  }
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
  onAddParticipant = async (e) => {
    e.preventDefault();
    const {
      username,
      age,
      address,
      locality,
      profession,
      dob,
      numberOfGuest,
    } = this.state;

    let response = await axios({
      url: "https://run.mocky.io/v3/1c566b27-cca5-4d2b-81d3-a17dc54c01ef",
      method: "GET",
    });
    console.log(response);
    if (response && response.status === 200) {
      alert("Participant added successfully");
      await this.setState({
        username: "",
        age: "",
        dob: "",
        locality: "",
        address: "",
        numberOfGuest: "",
        profession: "",
      });
    }
  };
  render() {
    const {
      username,
      age,
      address,
      locality,
      profession,
      dob,
      numberOfGuest,
    } = this.state;
    let maxDate = moment().subtract(20, "years").calendar();
    maxDate = moment(maxDate).format("YYYY-MM-DD");
    return (
      <div className="container">
        <div className="add-user-container">
          <form onSubmit={this.onAddParticipant} className="add-user-form">
            <h2>RSVP To Attend</h2>

            <div className="input-container">
              <label className="input-label">* Name</label>
              <input
                required
                value={username}
                onChange={(e) => this.setState({ username: e.target.value })}
                className="input-text"
                placeholder="Write your name here"
                type="text"
              />
            </div>
            <div className="input-container">
              <label className="input-label">* Age (min 20 years)</label>
              <input
                required
                value={age}
                onChange={(e) => this.setState({ age: e.target.value })}
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
                required
                value={dob}
                onChange={(e) => this.setState({ dob: e.target.value })}
                className="input-text"
                placeholder="Your date of birth"
                type="date"
                min="1900-01-01"
                max={maxDate}
              />
            </div>
            <div className="input-container">
              <label className="input-label">* Profession</label>
              <select
                required
                value={profession}
                onChange={(e) => {
                  this.setState({ profession: e.target.value });
                }}
              >
                <option>Employee</option>
                <option>Student</option>
              </select>
            </div>
            <div className="input-container">
              <label className="input-label">* Locality</label>
              <input
                required
                value={locality}
                onChange={(e) => this.setState({ locality: e.target.value })}
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
                required
                value={numberOfGuest}
                onChange={(e) =>
                  this.setState({ numberOfGuest: e.target.value })
                }
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
                required
                value={address}
                onChange={(e) => this.setState({ address: e.target.value })}
                style={{ resize: "none" }}
                placeholder="Your address (max 50 characters)"
              ></textarea>
            </div>
            <div className="input-container">
              <button className="register-button" type="submit">
                Register
              </button>
            </div>
          </form>
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
