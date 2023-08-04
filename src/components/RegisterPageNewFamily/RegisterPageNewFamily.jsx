import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterFormNewFamily from '../RegisterFormNewFamily/RegisterFormNewFamily';
import { Button, TextField, Box, Typography, Container } from "@mui/material";

function RegisterPageNewFamily() {
  const history = useHistory();

  return (
    <Container maxWidth="xs">
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
    </Container>
  );
}

export default RegisterPageNewFamily;
