import Post from './Post';
import classes from './PostsList.module.css';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function PostsList(){ 

    const posts = useLoaderData();

//     fetch('https://localhost:8080/posts').then(response => response.json()).then(data =>{
//       setPosts(data.posts);
// });
    // const [enteredBody, setEnteredBody] = useState('');


   function addPostHandler(postData){

        fetch('http://localhost:8080/posts',{
            method:'POST',
            body: JSON.stringify(postData),
            headers:{
                'Content-Type': 'application/json'
            }
        });

        // setPosts([postData, ...posts])
        setPosts((existingPosts)=>[postData,...existingPosts] )
        console.log("---setposts ---")
        console.log(setPosts);
   }

    return (

        <>   
        { posts.length > 0 && (
        <ul className={classes.posts}>
            {posts.map((post)=> <Post key={post.body} author={post.author} body={post.body} /> )}
        </ul>
        
        )}

        { posts.length === 0 &&(

            <div style={{ textAlign : 'center', color:'white'}}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
        )}

        </>
    );
}

export default PostsList;