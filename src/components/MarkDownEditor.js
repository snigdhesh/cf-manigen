import React, { Component, Fragment } from 'react';
import { Remarkable } from 'remarkable';
import { Paper, Typography, TextField, Grid, Divider } from '@material-ui/core';

export default class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
      displayTitle: false
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log(e.target.value.length);
    if (e.target.value.length > 0) {
      this.setState({ displayTitle: true })
    } else {
      this.setState({ displayTitle: false });
    }
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <Fragment>
        <Paper style={this.props.styles.cell}>
          <Typography variant="h2" gutterBottom style={this.props.styles.title}> Mark down editor  </Typography>
          <Typography component="div"  >
            <TextField
              id="outlined-textarea"
              label="Enter markdown here"
              placeholder="Example: # Introduction"
              multiline
              margin="normal"
              variant="outlined"
              style={{ "width": "50%" }}
              onChange={this.handleChange}
              defaultValue={this.state.value}
            />
          </Typography>
          {this.state.displayTitle ?
            <Paper style={this.props.styles.cell}>
              <Grid container spacing={3} >
                <Grid item md style={{ "backgroundColor": "whitesmoke", "padding": "1%" }}>
                  {
                    this.state.displayTitle ?
                      <Typography variant="h4" style={{ "color": "darkgray" }}>
                        Preview
                      <Divider />
                      </Typography> :
                      null
                  }
                  <Typography variant="body1" gutterBottom dangerouslySetInnerHTML={this.getRawMarkup()}></Typography>
                </Grid>
              </Grid>
            </Paper>
            : null}
        </Paper>

      </Fragment>
    );
  }
}

