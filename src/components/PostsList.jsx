import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost'
import { useState } from 'react';
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}){ 
    // const [enteredBody, setEnteredBody] = useState('');
   

    const [enteredBody, setEnteredBody] = useState('');

    const [enteredAuthor, setEnteredAuthor ] = useState('');

 

    function bodyChangeHandler(event){

        setEnteredBody(event.target.value);
    }

    function AuthorChangeHandler(event){
        setEnteredAuthor(event.target.value);

    }

    return (

        <>
        {isPosting ?       <Modal onClose={onStopPosting}>
                <NewPost
                onBodyChange={bodyChangeHandler}  
                onAuthorChange={AuthorChangeHandler} />
                </Modal>:false}

  
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody}/>
            <Post author="Jane Smith" body="This is Jane's post."/>
            {/* <Post author="Bob Johnson" body="This is Bob's post."/>
            <Post author="Alice Williams" body="This is Alice's post."/> */}

        </ul>
        </>
    );
}

export default PostsList;