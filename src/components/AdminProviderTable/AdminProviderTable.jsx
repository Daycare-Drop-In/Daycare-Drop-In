import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, CardActionArea, IconButton, Typography, Button, Container, Grid, Box, CardHeader, CardActions, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';


function AdminProviderTable() {

  const dispatch = useDispatch();
  const providers = useSelector(store => store.provider);
  console.log("in AdminProviderTable, and providers are:", providers);

  const columns = [
    { id: "business", label: "Daycare", minWidth: 150 },
    { id: "provider", label: "Provider", minWidth: 150 },
    { id: "delete_button", label: "", minWidth: 100 }
  ]

  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }

  useEffect(() => {
    dispatch({
      type: "GET_ALL_PROVIDERS",
    });
  }, []);



  return (
    // <div className="container">
    //   <Container maxWidth={"xs"}>
    <Grid container spacing={1} >
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Typography
          variant="h4"
          align="center"
        >
          Providers
        </Typography>
        <TableContainer component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.label}
                    style={{ minWidth: column.minWidth, width: column.width }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {providers.map((provider) => (
                <TableRow key={provider.id}>
                  <TableCell>
                    {provider.business_name}
                    <br />
                    {provider.street_address} {provider.unit}
                    <br />
                    {provider.city}, {provider.state} {provider.zip}
                  </TableCell>
                  <TableCell>
                    {provider.prov_first_name} {provider.prov_last_name}
                    <br />
                    {formatPhoneNumber(provider.prov_number)}
                    <br />
                    {provider.prov_email}
                  </TableCell>
                  {/* <TableCell>
                  {provider.street_address} {provider.unit}
                    <br />
                    {provider.city}, {provider.state} {provider.zip}
                  </TableCell> */}
                  <TableCell>
                    <Button
                      variant="contained"
                      name="delete"
                      startIcon={<DeleteIcon />}
                      sx={{
                        p: 1,
                      }}
                    //  onClick={}
                    >
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Grid>
    </Grid>
    //   </Container>
    // </div>
  );
}

export default AdminProviderTable;
