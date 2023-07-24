import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterFormProvider() {
  

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: newProvider,
    });
  }; 

const providerData = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  photo_url: "",
  license: "",
  business_name: "",
  street_address: "",
  unit: "",
  city: "",
  state: "",
  zip: "",
  hours: "",
  rates: "",
  meals: false,
  business_description: "",
  personal_description: "",
  contract_language: "",
};

const [newProvider, setNewProvider] = useState(providerData)

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register New Provider</h2>
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
            value={newProvider.username}
            required
            onChange={(event) => setNewProvider({...newProvider, username: event.target.value})}
          />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password
          <input
            type="text"
            name="password"
            value={newProvider.password}
            required
            onChange={(event) => setNewProvider({...newProvider, password: event.target.value})}
          />
        </label>
      </div>

      <div>
        <label htmlFor="first_name">
          First Name
          <input
            type="text"
            name="first_name"
            value={newProvider.first_name}
            required
            onChange={(event) => setNewProvider({...newProvider, first_name: event.target.value})}
          />
        </label>
      </div>

      <div>
        <label htmlFor="last_name">
          Last Name
          <input
            type="text"
            name="last_name"
            value={newProvider.last_name}
            required
            onChange={(event) => setNewProvider({...newProvider, last_name: event.target.value})}
          />
        </label>
      </div>

      <div>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            value={newProvider.email}
            required
            onChange={(event) => setNewProvider({...newProvider, email: event.target.value})}
          />
        </label>
      </div>

      <div>
        <label htmlFor="phone_number">
          Phone Number
          <input
            type="text"
            name="phone_number"
            value={newProvider.phone_number}
            required
            onChange={(event) => setNewProvider({...newProvider, phone_number: event.target.value})}
          />
        </label>
      </div>

      
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterFormProvider;
