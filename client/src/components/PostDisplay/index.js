import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { Link } from 'react-router-dom';
import { QUERY_POSTS } from '../../utils/queries';

const PostDisplay = ({ title }) => {

    const { loading, error, data } = useQuery(QUERY_POSTS)


    if (!data?.posts.length) {
        return <h3>No posts yet.</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {data?.posts &&
                data?.posts.map(post => (
                    <div className="columns is-centered">
                        <div key={post._id} className="card mb-3 columns is-centered">
                            <div className="column posts-column">
                                <p className="card-header">
                                    <Link
                                        to={`/profile/${post.username}`}
                                        style={{ fontWeight: 700 }}
                                        className="titlez3"
                                    >
                                        {post.username}
                                    </Link>{' '}
                                    posted on {post.createdAt}
                                </p>
                                <div className="card-body">
                                    <Link to={`/post/${post._id}`}>
                                        <p>{post.postText}</p>
                                        <p className="mb-0">
                                            Comments: {post.commentCount} || Click to{' '}
                                            {post.commentCount ? 'see' : 'start'} the discussion!
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PostDisplay;