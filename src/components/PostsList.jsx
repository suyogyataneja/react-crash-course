import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost'
import Modal from './Modal';
import { useState } from 'react';

function PostsList({isPosting, onStopPosting}){ 
    // const [enteredBody, setEnteredBody] = useState('');
   const[posts, setPosts] = useState([]);

   function addPostHandler(postData){

        // setPosts([postData, ...posts])
        setPosts((existingPosts)=>[postData,...existingPosts] )
        console.log("---setposts ---")
        console.log(setPosts);
   }

    return (

        <>
        {isPosting ?       <Modal onClose={onStopPosting}>
                <NewPost
                onCancel={onStopPosting}
                onAddPost={addPostHandler}
                />
                </Modal>:false}

  
        <ul className={classes.posts}>
            {/* <Post author={enteredAuthor} body={enteredBody}/> */}
            {/* <Post author="Jane Smith" body="This is Jane's post."/> */}
            {/* <Post author="Bob Johnson" body="This is Bob's post."/>
            <Post author="Alice Williams" body="This is Alice's post."/> */}
            {/* {[<p>HI</p>, <p>there</p>]} */}
            {posts.map((post)=> <Post key={post.body} author={post.author} body={post.body} /> )}
        </ul>
        </>
    );
}

export default PostsList;