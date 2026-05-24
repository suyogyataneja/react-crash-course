import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost'
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}){ 
    // const [enteredBody, setEnteredBody] = useState('');
   
    return (

        <>
        {isPosting ?       <Modal onClose={onStopPosting}>
                <NewPost
                onCancel={onStopPosting}
                />
                </Modal>:false}

  
        <ul className={classes.posts}>
            {/* <Post author={enteredAuthor} body={enteredBody}/> */}
            <Post author="Jane Smith" body="This is Jane's post."/>
            {/* <Post author="Bob Johnson" body="This is Bob's post."/>
            <Post author="Alice Williams" body="This is Alice's post."/> */}

        </ul>
        </>
    );
}

export default PostsList;