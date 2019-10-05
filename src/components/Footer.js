import React, {Component} from 'react';
import {Typography} from '@material-ui/core';

class Footer extends Component{
    render(){
        return(
            <Typography variant="h5" style={{"marginTop":"5%"}} gutterBottom>
                Footer
            </Typography>
        )
    }
}

export default Footer