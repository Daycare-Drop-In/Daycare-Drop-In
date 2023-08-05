import React from 'react';
import { Container } from '@mui/material';
import { useHistory } from 'react-router-dom';
import RegisterFormProvider from '../RegisterFormProvider/RegisterFormProvider';

function RegisterPageProvider() {
  const history = useHistory();

  return (
    <Container maxWidth='xs'>
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
    </Container>
  );
}

export default RegisterPageProvider;
