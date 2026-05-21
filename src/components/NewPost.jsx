import classes from './NewPost.module.css'

import { useState } from 'react';

function NewPost(){

    const [enteredBody, setEnteredBody] = useState('');
    // let enteredBody ='';
    function changeBodyHandler(event){

        setEnteredBody(event.target.value);
        // enteredBody = event.target.value;
        // console.log(event.target.value);
    }

    return(

        <form className={classes.form}>
            <p>
                <label htmlFor="body"  >Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>{enteredBody}</p>
            <p>
                <label htmlFor="name">Your Name </label>
                <input type="text" id="name" required/>
            </p>


        </form>

    );
}

export default NewPost;