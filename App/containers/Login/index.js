import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { getUsers, loginSuccess } from './action';
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
    axios({
      url: `https://swapi.co/api/people`
    }, { mode: 'cors' }).then((res) => {
      if (res.data.results.length) {
        this.props.getUsers(res.data.results);
      }
    })
  };

  handleEmailChange(e) {
    e.preventDefault();
    this.setState({ userName: e.target.value })
  }

  handlePasswordChange(e) {
    e.preventDefault();
    this.setState({ password: e.target.value })
  }

  handleLoginClick() {
    let loggedIdUser = {};
    if (this.props.users && this.props.users.length) {
      this.props.users.map((user) => {
        if ((user.name === this.state.userName) && (this.state.password === user.birth_year)) {
          loggedIdUser = user;
        }
      });
      if (loggedIdUser.name) {
        this.setState({ errorMessage: '' });
        this.props.loginSuccess(loggedIdUser);
        this.props.history.push('/planets')
      } else {
        this.setState({ errorMessage: 'Invalid Credentials' });
      }
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
                  <Button bsStyle="default" onClick={this.handleLoginClick.bind(this)}> Login </Button>
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
    getUsers: (data) => dispatch(getUsers(data)),
    loginSuccess: (data) => dispatch(loginSuccess(data)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
