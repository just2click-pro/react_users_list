import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts";
import PostsService from "./PostsService";

import "./user-page.scss";


export default class UserPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: {
                name: "",
                phone: "",
                email: ""
            },
            posts: []
        };
    }

    getUsersPosts(user) {
        PostsService.getPosts(user.id)
            .then((response) => {
                this.setState({
                    posts: response
                });
            });
    }

    componentWillReceiveProps(nextProps) {
        let shouldUpdate = (nextProps.selectedUser ? true : false);
        if (shouldUpdate) {
            this.setState({
                user: nextProps.selectedUser
            });
            this.getUsersPosts(nextProps.selectedUser);
        }

        return shouldUpdate;
    }

    render(){
        return (<main className="user-page">
                    <UserDetails user={ this.state.user }/>
                    <hr />
                    <UserPosts posts={ this.state.posts }/>
                </main>)
    }
}
