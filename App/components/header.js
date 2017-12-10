import React from 'react';
import { Link } from 'react-router-dom';
import { Router} from 'react-router';
import { connect } from 'react-redux';

import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { logoutSuccess } from '../containers/Login/action';


class Header extends React.Component{
  constructor(props) {
    super(props);
  }

  handleLogout(){
    this.props.logoutSuccess()
  }
    render(){
        return(
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/"> Xebia TestApp </Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav style={{float:'right'}}>
                      {(this.props.activeUser && this.props.activeUser.name) ?
                          <NavItem> {this.props.activeUser.name}</NavItem>
                        :''
                      }
                        <NavItem onClick={this.handleLogout.bind(this)} eventKey={2} ><Link to="/"> Logout</Link></NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    activeUser: state.userReducer.activeUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutSuccess : () => dispatch(logoutSuccess()),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);