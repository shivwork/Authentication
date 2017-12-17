import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { registerUser, loginSuccess } from './action';
import { getPlanetsRequest } from '../Planet/action';
import axios from 'axios';
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      errorMessage: ''
    }
  }

  // Luke Skywalker
  //  19BBY

  /*****************************      Form Handlers       *************************/
  componentWillMount() {
    // axios({
    //   url: `https://swapi.co/api/people`
    // }, { mode: 'cors' }).then((res) => {
    //   if (res.data.results.length) {
    //     this.props.getUsers(res.data.results);
    //   }
    // })
  };

  handleEmailChange(e) {
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

  handleRegister(){
     if(this.state.userName === ''){
        return this.setState({ errorMessage: 'Please Enter User Name' });
      }
      if(this.state.password === ''){
        return this.setState({ errorMessage: 'Please Enter Password' });
      }
      if(this.state.userName && this.state.password !== ''){
        this.setState({ errorMessage: '' });
        let data = {
            'user': this.state.userName,
           'password': this.state.password,
        }
        this.props.registerUser(data);
        console.log('handleRegister:');
      }
  }

  /*****      End Form Handlers       ****/

  render() {
    return (
      <div>
        <Grid>
          <Col
           style={{ margin: 'auto', width: '60%',marginTop:'20%', backgroundColor:'#7fffd46e', 
           height:'200px',borderStyle:'solid',borderColor:'aquamarine', borderRadius:'17px'}}>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail" className="text-danger" style={{width:'50%',margin:'auto'}}>
                <Col componentClass={ControlLabel} style={{marginLeft:'30%'}}>
                  {this.state.errorMessage !== '' ? this.state.errorMessage : ''}
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalEmail" style={{marginTop:'2%'}}>
                <Col componentClass={ControlLabel} sm={3}>
                  User Name
                  </Col>
                <Col sm={6}>
                  <FormControl value={this.state.userName} onChange={this.handleEmailChange.bind(this)} type="userName" placeholder="User Name" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalEmail">
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
                  <Button bsStyle="primary" onClick={this.handleLoginClick.bind(this)}> Login </Button>
                  :''
                  }
                  <Button bsStyle="primary" onClick={this.handleRegister.bind(this)}> Register </Button>
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
