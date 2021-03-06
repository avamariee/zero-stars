import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

const PostForm = () => {
    const [postText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });
                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] }
                });
            } catch (e) {
                console.error(e);
            }

            // update me object's cache, appending new post to the end of the array
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, posts: [...me.posts, addPost] } }
            });
        }
    });
    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            // add post to database
            await addPost({
                variables: { postText }
            });

            // clear form value
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="columns is-centered">
            {/* <div class="card"> */}
                <form
                    className="post-form"
                    onSubmit={handleFormSubmit}
                >


                    <textarea
                        placeholder="Type your post here!"
                        value={postText}
                        className="form-control"
                        onChange={handleChange}
                    ></textarea>
                    <div class="columns">
                        <div class="column">
                            <button className="btn" type="submit">
                                Submit
                            </button>
                        </div>
                        <div class="column">
                            <p className={`${characterCount === 280 || error ? 'text-error' : ''}`}>
                                Character Count: {characterCount}/280
                                {error && <span className="bottom-error">Something went wrong...</span>}
                                {console.log('If theres an error with the post, this is the error: ' + error)}
                            </p>
                        </div>
                    </div>
                </form>
            {/* </div> */}
        </div>
    )
}

export default PostForm;