const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor='username'>Username</label>
      <input type='text' id='username' />
      <label htmlFor='age'>Age (years)</label>
      <input type='number' id='age' step='1' />
      <button type='submit'>Add User</button>
    </form>
  );
};

export default AddUser;
