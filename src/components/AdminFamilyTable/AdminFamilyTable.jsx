import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, CardActionArea, IconButton, Typography, Button, Container, Grid, Box, CardHeader, CardActions, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material';
// import EditIcon from "@mui/icons-material/Edit";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


function AdminFamilyTable() {

  const dispatch = useDispatch();
  const families = useSelector(store => store.family);
  console.log(families);

  const columns = [
    { title: "Family Name", field: "family_name" },
    { title: "Parent Name", field: "parent_first_name" },
    { title: "Parent Email", field: "parent_email" },
    { title: "Parent Phone", field: "parent_number" },
    { title: "Family Address", field: "family_address" },
  ]


//   access_code
// : 
// null
// city
// : 
// "MPLS"
// family_name
// : 
// "Ali"
// id
// : 
// 1
// parent_email
// : 
// "abc@123.com"
// parent_first_name
// : 
// "Mo"
// parent_last_name
// : 
// "Ali"
// parent_number
// : 
// "(555)555-5555"
// parent_pic
// : 
// "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
// photo_url
// : 
// "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
// state
// : 
// "MN"
// street_address
// : 
// "123 New Street"
// unit
// : 
// null
// zip
// : 
// 55407

  useEffect(() => {
    dispatch({
      type: "GET_ALL_FAMILIES",
    });
  }, []);



  return (
    <div className="container">
      <Container maxWidth={"xs"}>
        <Grid container spacing={1} >
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography>Family Table</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.title}>{column.title}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {families.map((family) => (
                    <TableRow key={family.id}>
                      <TableCell>{family.family_name}</TableCell>
                      <TableCell>{family.parent_first_name}</TableCell>
                      <TableCell>{family.parent_email}</TableCell>
                      <TableCell>{family.parent_number}</TableCell>
                      <TableCell>{family.street_address}{family.unit}{family.city}{family.state}{family.zip}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AdminFamilyTable;
