import React, { Component, Fragment } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Divider, Paper, Typography, Fab, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EnvVariable from './EnvVariable';

class ManifestForm extends Component {

    render() {
        const styles = {
            select: {
                "backgroundColor": "white",
                "border": "0px solid black",
                "width": "15%",
                "marginTop": "0.9%",
                "marginLeft": "1%"
            },
            formcontrol: {
                "border": "0px solid black",
                "margin": "0% 1%",
                "width": "20%",
                "padding": "0%"
            }
        }
        return (
            <Fragment>
                <form>
                    <FormControl style={styles.formcontrol}>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Application name"
                            placeholder="ex: example-app"
                            defaultValue=""
                            margin="normal"
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl style={styles.formcontrol}>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Build Pack"
                            placeholder="ex: static_buildpack"
                            defaultValue=""
                            margin="normal"
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl style={styles.formcontrol}>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Host"
                            placeholder="ex: example-test"
                            defaultValue=""
                            margin="normal"
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl style={styles.formcontrol}>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Domain"
                            placeholder="ex: development.cf.apps.io"
                            defaultValue=""
                            margin="normal"
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl style={styles.formcontrol}>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Path"
                            placeholder="ex: ./target/<appname>-1.0-SNAPSHOT.jar"
                            defaultValue=""
                            margin="normal"
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl style={styles.formcontrol}>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Time out"
                            placeholder="ex: 180"
                            defaultValue=""
                            margin="normal"
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl style={styles.formcontrol}>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Instances"
                            defaultValue=""
                            placeholder="ex: 1"
                            margin="normal"
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl style={styles.formcontrol}>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Services"
                            placeholder="ex: configserver, appdynamics"
                            defaultValue=""
                            margin="normal"
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl variant="outlined" style={styles.select}>
                        <InputLabel htmlFor="outlined-age-simple" >
                            <span style={styles.select}>Memory</span>
                        </InputLabel>
                        <Select>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>512M</MenuItem>
                            <MenuItem value={20}>1G</MenuItem>
                            <MenuItem value={30}>2G</MenuItem>
                        </Select>
                    </FormControl>
                    <EnvVariable/>
                </form>
            </Fragment>
        )
    }
}

export default ManifestForm