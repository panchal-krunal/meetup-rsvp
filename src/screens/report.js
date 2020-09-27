import React, { Component } from "react";
import "./style.css";
import users from "../utils/users.json";
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professionals: 0,
      students: 0,
      age13: 0,
      age18: 0,
      age25: 0,
    };
  }
  async componentDidMount() {
    let professionals = 0,
      students = 0,
      age13 = 0,
      age18 = 0,
      age25 = 0;
    users &&
      users.map((item) => {
        if (item.profession.toLowerCase() === "student")
          students = students + 1;
        if (item.profession.toLowerCase() === "employee")
          professionals = professionals + 1;
        if (parseInt(item.age) >= 13 && parseInt(item.age) <= 18)
          age13 = age13 + 1;
        if (parseInt(item.age) > 18 && parseInt(item.age) <= 25)
          age18 = age18 + 1;
        if (parseInt(item.age) > 25) age25 = age25 + 1;
      });
    await this.setState({
      professionals,
      students,
      age13,
      age18,
      age25,
    });
  }
  render() {
    const { professionals, students, age13, age18, age25 } = this.state;
    return (
      <div className="container">
        <div className="report-card">
          <h2>Summary of Participants in Event</h2>
          <div className="report-grid">
            <div className="report-item">
              <div className="title">Professional's</div>
              <div className="value">{professionals}</div>
            </div>
            <div className="report-item">
              <div className="title">Students</div>
              <div className="value">{students}</div>
            </div>
            <div className="report-item">
              <div className="title">Age Group - 13 to 18</div>
              <div className="value">{age13}</div>
            </div>
            <div className="report-item">
              <div className="title">Age Group - 18 to 25</div>
              <div className="value">{age18}</div>
            </div>
            <div className="report-item">
              <div className="title">Age Group - 25+</div>
              <div className="value">{age25}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Report;
