import React from 'react';
import {
	Button,
	TextField,
	Box,
	Typography,
	Container,
} from "@mui/material";

import { useHistory } from 'react-router-dom';
import RegisterFormJoinFamily from '../RegisterFormJoinFamily/RegisterFormJoinFamily';

function RegisterPageJoinFamily() {
  const history = useHistory();


  return (
    <Container maxWidth='xs'>
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
    </Container>
  );
}

export default RegisterPageJoinFamily;
