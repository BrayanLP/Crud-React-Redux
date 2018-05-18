import React, { PropTypes } from 'react';
import PostCard from './PostCard';

export default function PostsList({ posts, deletePost }) {
    const emptyContent = 'Hola';

    const postsList = (
        <div>
            {console.log(this.props.post)}
            {/* {this.props.posts.map(post => (
                <PostCard post={post} key={post.id} deletePost={deletePost} />
            ))} */}
        </div>
    );

    return <div>{posts.length === 0 ? emptyContent : postsList}</div>;
}

// PostsList.propTypes = {
//     posts: PropTypes.array.isRequired,
//     deletePost: PropTypes.func.isRequired,
// };
