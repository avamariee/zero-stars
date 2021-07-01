import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { QUERY_POSTS } from '../../utils/queries';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';

const PostDisplay = ({ title }) => {

    const { loading, error, data } = useQuery(QUERY_POSTS)
    console.log(data)


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
                               <div>
                                    <p className="card-header">
                                        
                                            <p className="titlez3">{post.username}</p>
                                            
                                        
                                        posted on {post.createdAt}
                                    </p>
                                    <p className="post-text">
                                {post.postText}
                            </p>
                               </div>
                                <div className="card-body">
                                <p className="mb-0">
                                            Comments: {post.commentCount}
                                            {/* <CommentList/> */}
                                        </p>
                                </div>
                                {/* <CommentForm postId={post._id}/> */}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PostDisplay;