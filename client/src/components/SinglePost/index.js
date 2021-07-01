import React from 'react';

import CommentForm from '../CommentForm';
import CommentList from '../CommentList';

const Post = (props) => {

const { post } = props
    console.log(post)

    return (
        <div>

            <div className="columns is-centered">
                <div key={post._id} className="card mb-3 columns is-centered">
                    <div className="column posts-column">
                        <p className="card-header">

                            Posted on {post.createdAt}
                        </p>
                        <p className="post-text">
                            {post.postText}
                        </p>
                        <div className="card-body">
                            <p className="mb-0">
                                Comments: {post.commentCount}
                                {/* <CommentList /> */}
                            </p>
                        </div>
                        <CommentForm postId={post._id} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Post;