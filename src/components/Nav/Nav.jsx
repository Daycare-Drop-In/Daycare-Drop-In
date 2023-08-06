import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import logo from './Logo/drop.png'


import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Nav() {
  const user = useSelector((store) => store.user);

  // const [open, setOpen] = useState(false);
  // const toggleDrawer = (open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   setOpen(open);
  // };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const image = require("./drop.png");
  return (<>
    <div className="nav">
      <div className="left-stuff">
        
          <img src={image} alt="header-logo" className="header-logo" />

          <Link to="/home">
            <p className="nav-title">Daycare Drop-in</p>
          </Link>
      </div>

  return (
		<>
			<div className="nav">
				<Link to="/home">
					<div className="logo-title">
						<img id='logo' src={logo} alt="logo" height="25" />
						<h2 className="nav-title">Daycare Drop-in</h2>
					</div>
				</Link>
				{user.id && (
					<div>
						<IconButton
							aria-controls={open ? "basic-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							edge="start"
							color="white"
							aria-label="open drawer"
							onClick={handleClick}
							sx={{
								color: "white",
								mr: 2,
								display: { xs: "block", sm: "none" },
							}}
						>
							<MenuIcon />
						</IconButton>

						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
						>
							<MenuItem onClick={handleClose}>
								<LogOutButton />
							</MenuItem>
						</Menu>
					</div>
				)}

     
    </>);

}

export default Nav;
