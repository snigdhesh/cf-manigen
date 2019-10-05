import React, { Component } from 'react';
import {AppBar, Toolbar,Typography} from '@material-ui/core';

class Header extends Component{
    render(){
        return(
            <AppBar position="static">
            <Toolbar>
              {/* <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h5" gutterBottom>
                Cloud Foundry Manifest Generator
              </Typography>
              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
        )
    }
}

export default Header