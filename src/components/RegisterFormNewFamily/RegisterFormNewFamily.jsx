import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterFormNewFamily() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [address, setAddress] = useState('');
  const [unit, setUnit] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [photo, setPhoto] = useState('');
  const [accessCode, setAccessCode] = useState('');

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register New Family</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
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
        <label htmlFor="family_name">
          Family Name:
          <input 
          type="text" 
          name="family name"
          value={familyName}
          required
          onChange={(event) => setFamilyName(event.target.value)}
          />
        </label>
      </div>
      <div>
      <label htmlFor="street_address">
          Street Address:
          <input 
          type="text"
          name="address"
          value={address}
          required
          onChange={(event) => setAddress(event.target.value)}
          />
        </label>
      </div>
      <div>
      <label htmlFor="unit">
          Unit:
          <input 
          type="text"
          name="unit"
          value={unit}
          required
          onChange={(event) => setUnit(event.target.value)}
          />
        </label>
        </div>
        <div>
        <label htmlFor="city">
          City:
          <input 
          type="text"
          name="city"
          value={city}
          required
          onChange={(event) => setCity(event.target.value)}
          />
        </label>
        </div>
        <div>
        <label htmlFor="state">
          State:
          <input 
          type="text"
          name="state"
          value={state}
          required
          onChange={(event) => setState(event.target.value)}
          />
        </label>
        </div>
        <div>
        <label htmlFor="zip">
          Zipcode:
          <input 
          type="number"
          name="zip"
          value={zip}
          required
          onChange={(event) => setZip(event.target.value)}
          />
        </label>
        </div>
        <div>
        <label htmlFor="photo">
          Photo:
          <input 
          type="url"
          name="photo"
          value={photo}
          required
          onChange={(event) => setPhoto(event.target.value)}
          />
        </label>
        </div>
        <div>
        <label htmlFor="acess_code">
          Family Access Code:
          <input 
          type="text"
          name="photo"
          value={accessCode}
          required
          onChange={(event) => setAccessCode(event.target.value)}
          />
        </label>
        </div>


      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterFormNewFamily;
