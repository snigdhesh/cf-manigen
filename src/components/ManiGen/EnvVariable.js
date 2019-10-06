import React, { Component, Fragment } from 'react'
import { TextField, Select, MenuItem, InputLabel, FormControl, Divider, Paper, Typography, Fab, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

class EnvVariable extends Component {
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
                <Paper style={{ "marginTop": "2%", "padding": "1%" }}>
                    <form>
                        <Typography variant="h4" gutterBottom style={{ "margin": "1%" }}> Env variables</Typography>
                        <Divider />
                        <FormControl style={styles.formcontrol}>
                            <TextField
                                id="outlined-uncontrolled"
                                label="Key"
                                placeholder="spring.application.name"
                                defaultValue=""
                                margin="normal"
                                variant="outlined"
                            />
                        </FormControl>
                        <FormControl style={styles.formcontrol}>
                            <TextField
                                id="outlined-uncontrolled"
                                label="Value"
                                placeholder="example-app"
                                defaultValue=""
                                margin="normal"
                                variant="outlined"
                            />
                        </FormControl>
                        <span style={{ "marginTop": "1%", "border": "0px solid black" }}>
                            <Button
                                style={{ "margin": "1%" }}
                                variant="contained"
                                color="primary"
                                startIcon={<AddIcon />}
                            >
                                Add
                                    </Button>

                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<DeleteIcon />}
                            >
                                Delete
                                    </Button>
                        </span>
                    </form>

                </Paper>
            </Fragment>
        )
    }
}

export default EnvVariable