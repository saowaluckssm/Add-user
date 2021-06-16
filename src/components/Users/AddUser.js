import React,{ useState } from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';

import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [error, setError] = useState();


  const addUserHandler = (event) => {
    event.preventDefault();
    if(enterUsername.trim() === ""|| enterEmail.trim() === "" || enterEmail < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and email."
      });
      return; 
    }
    props.onAddUser(enterUsername, enterEmail)
    console.log(enterUsername, enterEmail);
    setEnterUsername("");
    setEnterEmail("");
    
    
  };

  const usernameChangeHandler = (e) => {
    // console.log(e.target.value);
    setEnterUsername(e.target.value)
    
  }

  const emailChangeHandler = (e) => {
    // console.log(e.target.value);
    setEnterEmail(e.target.value)
  }

  const errorHandler = () => {
    setError(null);
  }



  return (
    <div>
    {error && <ErrorModal 
    title={error.title} 
    message={error.message}
    onConfirm={errorHandler}
     />}
    
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
    <label htmlFor="username">Username :</label>
    <input value={enterUsername} id="username" type="text" onChange={usernameChangeHandler}/>
    <label htmlFor="email">Email :</label>
    <input value={enterEmail} id="email" type="text" onChange={emailChangeHandler} />
      <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
  )
}

export default AddUser
