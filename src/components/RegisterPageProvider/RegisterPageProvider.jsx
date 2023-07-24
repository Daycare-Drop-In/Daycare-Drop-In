import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterFormProvider from '../RegisterFormProvider/RegisterFormProvider';

function RegisterPageProvider() {
  const history = useHistory();

  return (
    <div>
      <h1>NEW PROVIDER REGISTRATION </h1>
      <RegisterFormProvider />
    

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

export default RegisterPageProvider;
