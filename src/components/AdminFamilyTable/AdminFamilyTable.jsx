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


function AdminFamilyTable() {

  const dispatch = useDispatch();
  const families = useSelector(store => store.family);
  console.log(families);

  const columns = [
    { id: 'family_name', label: "Family Name", minWidth: 100 },
    { id: 'parent', label: "Primary Parent", minWidth: 150 },
    { id: 'family_address', label: "Address", minWidth: 150 },
    { id: 'delete_button', label: "", minWidth: 100 }
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
      type: "GET_ALL_FAMILIES",
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
          Families
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead
              stickyHeader={true}
            >
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
              {families.map((family) => (
                <TableRow key={family.id}>
                  <TableCell>
                    {family.family_name}
                  </TableCell>
                  <TableCell>
                    {family.parent_first_name}
                    <br />
                    {formatPhoneNumber(family.parent_number)}
                    <br />
                    {family.parent_email}
                  </TableCell>
                  <TableCell>{family.street_address} {family.unit}
                    <br />
                    {family.city}, {family.state} {family.zip}
                  </TableCell>
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

export default AdminFamilyTable;
