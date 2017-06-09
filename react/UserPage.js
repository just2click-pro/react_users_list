import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts"

import "./user-page.scss";


export default class UserPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: {
                name: "",
                phone: "",
                email: ""
            }
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        let shouldUpdate = (nextProps.selectedUser ? true : false);
        if (shouldUpdate) {
            this.setState({
                user: nextProps.selectedUser
            });
        }

        return shouldUpdate;
    }


    getPosts(){
        this.posts = [
            {title: "hello", body: "world"},
            {title: "lorem", body: "ipsum"},
            {title: "whats", body: "up"},
            {title: "foo", body: "bar"}
        ];
    }

    render(){
        return (<main className="user-page">
                    <UserDetails user={ this.state.user }/>
                    <UserPosts posts={ this.posts }/>
                </main>)
    }
}
