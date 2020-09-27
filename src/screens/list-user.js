import React, { Component } from "react";
import "./style.css";
import users from "../utils/users.json";
class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      masterUsers: users,
    };
  }
  onSearchChange = async (e) => {
    await this.setState({ searchText: e.target.value });
    const { searchText, masterUsers } = this.state;
    if (searchText) {
      let filteredUsers = masterUsers.filter(
        (item) => item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );

      if (filteredUsers && filteredUsers.length !== 0) {
        await this.setState({ users: filteredUsers });
      }
    } else {
      await this.setState({ users: masterUsers });
    }
  };
  render() {
    const { users, searchText } = this.state;
    return (
      <div className="container">
        <div className="list-container">
          <input
            value={searchText}
            onChange={this.onSearchChange}
            type="text"
            placeholder="Search User"
            className="search-input"
          />
          <div className="search-list">
            {users &&
              users.map((item, index) => {
                return (
                  <div className="list-item" key={index}>
                    <div className="list-item-left">
                      <div className="item">
                        <div className="title">Name</div>
                        <div className="value">{item.name}</div>
                      </div>
                      <div className="item">
                        <div className="title">Age</div>
                        <div className="value">{item.age}</div>
                      </div>
                    </div>
                    <div className="list-item-right">
                      <div className="item">
                        <div className="title">DOB</div>
                        <div className="value">{item.dob}</div>
                      </div>
                      <div className="item">
                        <div className="title">Profession</div>
                        <div className="value">{item.profession}</div>
                      </div>
                    </div>
                    <div className="list-item-right">
                      <div className="item">
                        <div className="title">Number of Guests</div>
                        <div className="value">{item.number_of_guest}</div>
                      </div>
                      <div className="item">
                        <div className="title">Locality</div>
                        <div className="value">{item.locality}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default ListUser;
