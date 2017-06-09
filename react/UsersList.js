import React from "react";

import "./users-list.scss";

export default class UsersList extends React.Component {

    constructor(props){
        super(props);
    }

    renderUser(user){
        return <li key={user.id} onClick={ ()=> this.props.onUserSelected(user) } className="selectable">{ user.name }</li>;
    }

    render(){
        return (
            <nav className="users-list">
                    <h3>Users List</h3>
                    <ul>
                        { this.props.users.map(this.renderUser.bind(this)) }
                    </ul>
                </nav>)
    }
}
