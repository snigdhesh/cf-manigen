import React, { Component, Fragment } from 'react';
import { Typography, Paper, Divider } from '@material-ui/core';
import ManifestForm from './ManifestForm';

class ManifestGenerator extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <Fragment>
                <Paper style={this.props.styles.cell}>
                    <Typography variant="h2" gutterBottom style={this.props.styles.title}>Manifest Generator
                        <Divider/>
                        <Paper style={this.props.styles.cell}>
                            <ManifestForm />
                        </Paper>
                    </Typography>
                </Paper>
            </Fragment>
        )
    }
}

export default ManifestGenerator