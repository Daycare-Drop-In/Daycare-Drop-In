import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterFormNewFamily from '../RegisterFormNewFamily/RegisterFormNewFamily';
import { Button, TextField, Box, Typography, Container } from "@mui/material";
import { useDispatch } from 'react-redux';


function RegisterPageNewFamily() {
  const history = useHistory();
  const dispatch = useDispatch();


  return (
		<Container maxWidth="xs">
			

			<RegisterFormNewFamily />

			<center>
				<button
					type="button"
					className="btn btn_asLink"
					onClick={() => {
						history.push("/login");
					}}
				>
					Login
				</button>
			</center>
		</Container>
  );
}

export default RegisterPageNewFamily;
