import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);

    } catch (error) {
      console.error(error)
    }
    // const token = mutationResponse.data.addUser.token;
  };


return (
  <div className="container my-1">
    <Link to="/login">← Go to Login</Link>

    <h2>Create Account</h2>
    <form onSubmit={handleFormSubmit}>
      <div className="flex-row space-between my-2">
        <label htmlFor="firstName">First Name:</label>
        <input
          placeholder="First Name"
          name="firstName"
          type="firstName"
          id="firstName"
          value={formState.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="flex-row space-between my-2">
        <label htmlFor="lastName">Last Name:</label>
        <input
          placeholder="Last Name"
          name="lastName"
          type="lastName"
          id="lastName"
          value={formState.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="flex-row space-between my-2">
        <label htmlFor="email">Email:</label>
        <input
          placeholder="Enter your email"
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex-row space-between my-2">
        <label htmlFor="pwd">Password:</label>
        <input
          placeholder="******"
          name="password"
          type="password"
          id="pwd"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex-row flex-end">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);
}

export default Signup;