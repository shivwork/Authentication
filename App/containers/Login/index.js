import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { registerUser, loginSuccess } from './action';
import { getPlanetsRequest } from '../Planet/action';
import axios from 'axios';
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

const styles = {
  formWrapper:{
    padding: '3em',
    background: '#8375fd',
    width: '55%',
    height: '40%',
    color: 'white',
    borderRadius: '10px',
    margin: '12% 12% 0 24%'
  },
  errorContainer:{
   width:'50%',
   margin:'auto'
  },
  errorMessage:{
    marginLeft: '3%',
    color: '#de0f0f',
  },
  btn:{
    marginRight: '15px'
  }
}
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      errorMessage: ''
    }
  }

  /*****************************      Form Handlers       *************************/
  handleEmailChange(e){
    e.preventDefault();
    this.setState({ userName: e.target.value});
    if(e.target.value === ''){
      this.setState({  errorMessage: 'Please Enter User Name' });
    }else{
      this.setState({  errorMessage: '' });
    }
  }

  handlePasswordChange(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
    if(e.target.value === ''){
      this.setState({  errorMessage: 'Please Enter Password' });
    }else{
      this.setState({  errorMessage: '' });
    }
  }

  handleLoginClick() {
    let loggedIdUser = {};
     if(this.state.userName === ''){
        return this.setState({ errorMessage: 'Please Enter User Name' });
      }
      if(this.state.password === ''){
        return this.setState({ errorMessage: 'Please Enter Password' });
      }
    if (this.props.users && this.props.users.length) {
      if(this.state.userName === ''){
        return this.setState({ errorMessage: 'Please Enter User Name' });
      }
      if(this.state.password === ''){
        return this.setState({ errorMessage: 'Please Enter Password' });
      }
      this.props.users.map((user) => {
        if ((user.user === this.state.userName) && (this.state.password === user.password)) {
          loggedIdUser = user;
        }
      });
      if (loggedIdUser.user) {
        this.setState({ errorMessage: '' });
        this.props.loginSuccess(loggedIdUser);
        this.props.history.push('/planets');
        this.props.getPlanetsRequest();
      } else {
        this.setState({ errorMessage: 'Invalid Credentials' });
      }
    }
  }

  handleRegister(){     //  Register user function
    var loggedIdUser;
     if(this.state.userName === ''){
        return this.setState({ errorMessage: 'Please Enter User Name' });
      }
      if(this.state.password === ''){
        return this.setState({ errorMessage: 'Please Enter Password' });
      }
      if(this.state.userName && this.state.password !== ''){

      this.props.users.map((user) => {    //  Check for user existence with this name and password
        if ((user.user === this.state.userName) && (this.state.password === user.password)) {
          loggedIdUser = user;
        }
      });

      if(loggedIdUser){   // User exist
          return this.setState({ errorMessage: 'This user already exist !' });
        }else{    //  User not exist
          this.setState({ errorMessage: '' });
          let data = {
            'user': this.state.userName,
            'password': this.state.password,
          }
          this.props.registerUser(data);
          this.props.history.push('/planets');
          this.props.getPlanetsRequest();
        }
      }
  }

  /*****      End Form Handlers       ****/
  render() {
    return (
      <div>
        <Grid>
          <Col>
            <Form horizontal style={styles.formWrapper}>
              <FormGroup className="text-danger" style={styles.errorContainer}>
                <Col componentClass={ControlLabel} style={styles.errorMessage}>
                  {this.state.errorMessage !== '' ? this.state.errorMessage : ''}
                </Col>
              </FormGroup>
              <FormGroup style={{marginTop:'2%'}}>
                <Col componentClass={ControlLabel} sm={3}>
                  User Name
                  </Col>
                <Col sm={6}>
                  <FormControl value={this.state.userName} onChange={this.handleEmailChange.bind(this)}  placeholder="User Name" />
                </Col>
              </FormGroup>
              <FormGroup >
                <Col componentClass={ControlLabel} sm={3}>
                  Password
                  </Col>
                <Col sm={6}>
                  <FormControl type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} placeholder="Password" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalEmail">
                <Col smOffset={3} sm={9}>
                  {this.props.users && this.props.users.length ?
                  <Button style={styles.btn} bsStyle="info" onClick={this.handleLoginClick.bind(this)}> Login </Button>
                  :''
                  }
                  <Button bsStyle="info" onClick={this.handleRegister.bind(this)}> Register </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => dispatch(registerUser(data)),
    loginSuccess: (data) => dispatch(loginSuccess(data)),
    getPlanetsRequest: () => dispatch(getPlanetsRequest()),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
