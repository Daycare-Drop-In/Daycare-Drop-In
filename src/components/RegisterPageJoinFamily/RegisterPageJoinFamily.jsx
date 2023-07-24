import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterFormJoinFamily from '../RegisterFormJoinFamily/RegisterFormJoinFamily';

function RegisterPageJoinFamily() {
  const history = useHistory();

  return (
    <div>
      <h1>JOIN FAMILY REGISTRATION </h1>
      <RegisterFormJoinFamily />
    

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

export default RegisterPageJoinFamily;
