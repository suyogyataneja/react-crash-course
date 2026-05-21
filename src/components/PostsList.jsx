import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost'

function PostsList() {

    return (

        <>
        <NewPost/>
        <ul className={classes.posts}>
            <Post author="John Doe" body="This is John's post."/>
            <Post author="Jane Smith" body="This is Jane's post."/>
            {/* <Post author="Bob Johnson" body="This is Bob's post."/>
            <Post author="Alice Williams" body="This is Alice's post."/> */}

        </ul>
        </>
    );
}

export default PostsList;