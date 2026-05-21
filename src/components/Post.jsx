import classes from './Post.module.css';


// const names =['Suyogya', 'Taneja']
function Post(props){

    // const chosenName =  Math.random() > 0.5 ? names[0] : names[1];

return (
    <li className={classes.post}>
        {/* <p>{chosenName}</p> */}
        {/* <p>React.js is awwesome!</p> */}
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
    </li>
);
}

export default Post;