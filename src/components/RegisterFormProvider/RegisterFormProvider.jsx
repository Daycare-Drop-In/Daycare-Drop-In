import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterFormProvider() {
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    console.log("New provider submitted:", newProvider);

    dispatch({
		type: "REGISTER_PROVIDER",
		payload: newProvider,
	});
  };

  const providerData = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: username,
    phone_number: "",
    photo_url: "",
    license: "",
    business_name: "",
    street_address: "",
    unit: "",
    city: "",
    state: "",
    zip: "",
    start_time: "",
    end_time: "",
    rates: "",
    meals: false,
    business_description: "",
    personal_description: "",
    contract_language: "",
  };

  const [newProvider, setNewProvider] = useState(providerData);

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
          Email:
          <input
            type="text"
            name="username"
            placeholder="youremail@example.com"
            value={newProvider.username}
            required
            onChange={(event) =>
              setNewProvider({ ...newProvider, username: event.target.value })
            }
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
            onChange={(event) =>
              setNewProvider({ ...newProvider, password: event.target.value })
            }
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
            onChange={(event) =>
              setNewProvider({ ...newProvider, first_name: event.target.value })
            }
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
            onChange={(event) =>
              setNewProvider({ ...newProvider, last_name: event.target.value })
            }
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
            onChange={(event) =>
              setNewProvider({
                ...newProvider,
                phone_number: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="photo_url">
          Photo URL
          <input
            type="text"
            name="photo_url"
            value={newProvider.photo_url}
            onChange={(event) =>
              setNewProvider({ ...newProvider, photo_url: event.target.value })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="license">
          License Number
          <input
            type="text"
            name="license"
            value={newProvider.license}
            required
            onChange={(event) =>
              setNewProvider({ ...newProvider, license: event.target.value })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="business_name">
          Business Name
          <input
            type="text"
            name="business_name"
            value={newProvider.business_name}
            required
            onChange={(event) =>
              setNewProvider({
                ...newProvider,
                business_name: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="street_address">
          Street Address
          <input
            type="text"
            name="street_address"
            value={newProvider.street_address}
            required
            onChange={(event) =>
              setNewProvider({
                ...newProvider,
                street_address: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="unit">
          Unit
          <input
            type="text"
            name="unit"
            value={newProvider.unit}
            onChange={(event) =>
              setNewProvider({
                ...newProvider,
                unit: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="state">
          State
          <input
            type="text"
            name="state"
            value={newProvider.state}
            required
            onChange={(event) =>
              setNewProvider({
                ...newProvider,
                state: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="zip">
          Zip Code
          <input
            type="text"
            name="zip"
            value={newProvider.zip}
            required
            onChange={(event) =>
              setNewProvider({
                ...newProvider,
                zip: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="start_time">
          Start time
          <input
            type="time"
            name="start_time"
            value={newProvider.start_time}
            required
            onChange={(event) =>
              setNewProvider({
                ...newProvider,
                start_time: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="end_time">
          End time
          <input
            type="time"
            name="end_time"
            value={newProvider.end_time}
            required
            onChange={(event) =>
              setNewProvider({
                ...newProvider,
                end_time: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="rates">
          Drop-in Rate $
          <input
            type="text"
            name="rates"
            value={newProvider.rates}
            required
            onChange={(event) =>
              setNewProvider({
                ...newProvider,
                rates: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="meals">
          Are meals/snacks provided?
          <input
            type="checkbox"
            name="meals"
            checked={newProvider.meals}
            onChange={(event) =>
              setNewProvider({ ...newProvider, meals: event.target.checked })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="business_description">
          Business Description
          <textarea
            rows="4"
            cols="50"
            name="business_description"
            placeholder="Tell us about your daycare! What makes it special? Anything you particularly want parents to know?"
            value={newProvider.business_description}
            required
            onChange={(event) =>
              setNewProvider({
                ...newProvider,
                business_description: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="personal_description">
          Personal Description
          <textarea
            rows="4"
            cols="50"
            name="personal_description"
            placeholder="Tell us about yourself! Who are you? What do you love about childcare?"
            value={newProvider.personal_description}
            required
            onChange={(event) =>
              setNewProvider({
                ...newProvider,
                personal_description: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label htmlFor="contract_language">
          Drop-Off Contract
          <textarea
            rows="4"
            cols="50"
            name="contract_language"
            placeholder="This is a sample drop-off contract agreement. Please review it and edit/add anything specific to your business."
            value={newProvider.contract_language}
            required
            onChange={(event) =>
              setNewProvider({
                ...newProvider,
                contract_language: event.target.value,
              })
            }
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
