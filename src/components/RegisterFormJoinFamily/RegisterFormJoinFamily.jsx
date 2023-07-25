import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterFormJoinFamily() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] =- useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [relationship, setRelationship] = useState('');
  const [photo_url, setPhoto_Url] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: username,
        relationship: relationship,
        photo_url: photo_url,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register to Join a Family</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Email:
          <input
            type="text"
            name="username"
            placeholder="youremail@example.com"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
      <label htmlFor="first_name">
          First Name:
          <input
            type="text"
            name="first name"
            value={firstName}
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
      </div>
      <div>
      <label htmlFor="last_name">
          Last Name:
          <input
            type="text"
            name="last name"
            value={lastName}
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
      </div>
      <div>
      <label htmlFor="phone_number">
          Phone #:
          <input
            type="text"
            name="phone number"
            value={phoneNumber}
            required
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
      </div>
      
      <div>
      <label htmlFor="relationship">
          Relation To Child:
          <input
            type="text"
            name="relationship"
            value={relationship}
            required
            onChange={(event) => setRelationship(event.target.value)}
          />
        </label>
      </div>
      <div>
      <label htmlFor="photo">
          Photo:
          <input
            type="url"
            name="photo"
            value={photo_url}
            required
            onChange={(event) => setPhoto_Url(event.target.value)}
          />
        </label>
      </div>



      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterFormJoinFamily;
