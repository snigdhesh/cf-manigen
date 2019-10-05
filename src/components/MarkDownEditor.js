import React, {Component, Fragment} from 'react';
import {Remarkable} from 'remarkable';
import {Paper,Typography,TextField,Grid} from '@material-ui/core';

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
    this.setState({ value: e.target.value});
    console.log(e.target.value.length);
    if(e.target.value.length > 0){
      this.setState({displayTitle: true})
    }else{
      this.setState({displayTitle:false});
    }
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    const title={
      "marginTop":"2%"
    };
    const editorStyles={"padding":"2%"};
    return (
      <Fragment>
        <Typography variant="h2" gutterBottom style={title}> Mark down editor  </Typography>
        <Paper>
              {/* <Typography component="p">
                Paper can be used to build surface or other elements for your application.
              </Typography> */}
              <Typography component="div" style={editorStyles} >
                <div className="MarkdownEditor">
                {/* <TextField
                  id="standard-dense"
                  label="Enter markdown here"
                  margin="dense"
                  onChange={this.handleChange}
                  defaultValue={this.state.value}
                /> */}

                <TextField
                  id="outlined-textarea"
                  label="Enter markdown here"
                  placeholder="Placeholder"
                  multiline
                  margin="normal"
                  variant="outlined"
                  style={{"width":"50%"}}
                  onChange={this.handleChange}
                  defaultValue={this.state.value}
                />

                  {/* <h3>Input</h3>
                  <label htmlFor="markdown-content">
                    Enter some markdown
                  </label>
                  <textarea
                    id="markdown-content"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                  /> */}
                  {/* <h3>Output</h3>
                  <div className="content"  dangerouslySetInnerHTML={this.getRawMarkup()}/> */}
                </div>
               
              </Typography>
        </Paper>
        <Grid container spacing={3} >
          <Grid item xs={12} style={{"backgroundColor":"whitesmoke", "padding":"1%"}}>
              {
                this.state.displayTitle ? <Typography variant="h4">Preview</Typography> : null
              }
              <Typography variant="body1" gutterBottom dangerouslySetInnerHTML={this.getRawMarkup()}></Typography>
          </Grid>
        </Grid>
        

     
      </Fragment>
    );
  }
}

