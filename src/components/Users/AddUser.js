import React, { useRef, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');

  const [error, setError] = useState({
    title: '',
    message: ''
  });

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredNameValue = nameInputRef.current.value;
    const enteredAgeValue = ageInputRef.current.value;

    if (
      enteredNameValue.trim().length === 0 ||
      enteredAgeValue.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username and age'
      });
      return;
    }

    if (+enteredAgeValue <= 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age'
      });
      return;
    }

    props.onAddUser(enteredNameValue, +enteredAgeValue);

    // setEnteredUsername('');
    // setEnteredAge('');
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError({
      title: '',
      message: ''
    });
  };

  return (
    <>
      {error.title && error.message && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor='age'>Age (years)</label>
          <input
            type='number'
            id='age'
            step='1'
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
