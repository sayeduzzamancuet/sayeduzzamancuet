import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
const outerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: orange[500],
      },
    },
  });
  const innerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: green[500],
      },
    },
  });

class register extends Component {
    constructor(){
        super();
        this.State={
          
        }
    }
    onResetHandler=(event)=>{
      this.state=null;
    }
    onChangeHandler=(event)=>{
        var name=event.target.name;
        var value=event.target.value;
        this.setState({[name]:value})
    }
    onSubmitHandler=(e)=>{
       console.log(this.state)
       e.preventDefault();
    }
    render() {
        
        return (
            <ThemeProvider theme={outerTheme}>
            <ThemeProvider theme={innerTheme}>
            
               <form onSubmit={this.onSubmitHandler} noValidate autoComplete="off">
               <Grid container direction={"column"} spacing={1}>
                  <Grid item><TextField id="fName" onChange={this.onChangeHandler} name="fName" label="First Name" variant="outlined" /></Grid>
                  <Grid item><TextField id="lName" onChange={this.onChangeHandler} name="lName" label="Last Name" variant="outlined" /></Grid>
                  <Grid item><TextField id="email" onChange={this.onChangeHandler} name="email" label="Email" variant="outlined" /></Grid>
                  <Grid item><TextField id="city" onChange={this.onChangeHandler} name="city" label="City" variant="outlined" /></Grid>
                  <Grid item><TextField id="phone" onChange={this.onChangeHandler} name="phone" label="Phone" variant="outlined" /></Grid>
                  <Grid item><TextField id="dob" type="date" defaultValue="1970-01-01" onChange={this.onChangeHandler} name="DOB" label="DOB" variant="outlined" /></Grid>
                  <Grid item>
                  <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
                      <Select
                        native
                        onChange={this.onChangeHandler}
                        value={this.State.age}
                        inputProps={{
                          name: 'age',
                          id: 'filled-age-native-simple',
                         }
                        }
                      >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </Select>
                  </Grid>
                  <Grid item>
                      <Button variant="contained" type="submit" color="primary"> Submit</Button>
                      <Button variant="contained" type="Reset" onClick={this.onResetHandler} color="secondary">Reset</Button>
                  </Grid>
                    
                
                </Grid>
            </form> 
           
            </ThemeProvider>
            </ThemeProvider>
        );
    }
}

export default register;