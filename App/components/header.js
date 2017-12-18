import React from 'react';
import { Link } from 'react-router-dom';
import { Router} from 'react-router';
import { connect } from 'react-redux';

import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { logoutSuccess } from '../containers/Login/action';

const styles = {
  container:{
    backgroundColor: '#191238',
    fontSize: '17px'
  }
}
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
                <Navbar style={styles.container}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/"> Xebia </Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav style={{float:'right'}}>
                      {(this.props.activeUser && this.props.activeUser.user) ?
                          <NavItem> {this.props.activeUser.user}</NavItem>
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