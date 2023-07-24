import React from "react";
import { useHistory } from 'react-router-dom';

function RegistrationLanding() {
  const history = useHistory();

  return (
    <div className="container">
      <center>
  

        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration_newprovider');
          }}
        >
          Register as a New Provider
        </button>

        <br/>

        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration_newfamily');
          }}
        >
          Register as a New Family
        </button>

        <br/>

        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration_joinfamily');
          }}
        >
          Join an existing family
        </button>
        </center>
    </div>
  );
}

export default RegistrationLanding;