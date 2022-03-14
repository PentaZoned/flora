import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
//import Auth from '../utils/auth';       
import { ADD_USER } from '../../utils/mutations';
import { storeValueIsStoreObject } from '@apollo/client/cache/inmemory/helpers';
import validation from 'validation'

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const [errors, setErrors] = useState({})

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    storeValueIsStoreObject({
      ...values,
      [event.target.name]: event.target.value,
    })
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
            value={values.firstName}
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
            value={values.lastName}
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
            value={values.email}
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
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
