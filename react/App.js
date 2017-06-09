import React from "react";
import UserPage from "./UserPage";
import UsersList from "./UsersList";

import UserService from "./UserService";

import './main.scss';

export default class App extends React.Component {
	constructor () {
		super();
		this.state = {
			users: [],
			selectedUser: {}
		};

		this.getUsers();
	}

	selectUser (user) {
		this.setState({
			selectedUser: user
		});
	}

	getUsers () {
  	UserService.getAllUsers()
  		.then((response) => {
				this.setState({
					users: response,
				});
				this.selectUser(response[0]);
		});
	}

  render(){
      return (
      	<div>
        	<UsersList users={ this.state.users } onUserSelected= { this.selectUser.bind(this) } />
        	<UserPage selectedUser={ this.state.selectedUser }/>
        </div>
      );
  }
}
