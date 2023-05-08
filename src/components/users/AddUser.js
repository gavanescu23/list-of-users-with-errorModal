import React, { useState } from 'react'
import Card from "../UI/Card"
import "./UserModule.css"
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUsername] = useState('');
  const [enteredAge, setAge] = useState('');
  const [error, setError] = useState('');



  const changeHandler = (e) => {
    setEnteredUsername(e.target.value);
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  }

  const addUserHandler = (e) => {
    e.preventDefault()
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: "invalid-input", message: "Please enter a valid name and age (non-empty-values)." })
      return;
    }

    if (+enteredAge < 1) {
      setError({ title: "invalid-age", message: "Please enter a valid age greater than 0." })
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    //console.log(enteredUserName);
    //console.log(enteredAge);
    setAge('');
    setEnteredUsername('');
  };

  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className="input">
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" value={enteredUserName} type="text" onChange={changeHandler} />
            <label htmlFor="age">Age</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
            <Button type="submit" >Add user</Button>
          </form>
        </Card>
    </div>
  )
}

export default AddUser