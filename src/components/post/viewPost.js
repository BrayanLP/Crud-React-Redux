import React, { Component } from "react";

import { connect } from "react-redux";

import Post from "../../Post";

// import EditPost from "./editPost";

class ViewPost extends Component {
    render() {
        return (
            <div>
                <h1 className="post_heading">Lista de Noticias</h1>
                {console.log(this.props.posts)}

                {/* {this.props.posts.map(post => (
                    <div key={post.id}>
                        {
                            <Post key={post.id} post={post} />
                        }
                    </div>
                ))} */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state
    };
};

export default connect(mapStateToProps)(ViewPost);
