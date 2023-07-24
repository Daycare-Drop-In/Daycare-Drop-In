import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterFormNewFamily from '../RegisterFormNewFamily/RegisterFormNewFamily';

function RegisterPageProvider() {
  const history = useHistory();

  return (
    <div>
      <h1>NEW FAMILY REGISTRATION PAGE</h1>
      <RegisterFormNewFamily />
    

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
}

export default RegisterPageNewFamily;
