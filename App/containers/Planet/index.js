import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlanets, filteredPlanet, activePlanet } from './action';
import axios from 'axios';
import { Grid, Row, Col, Table, FormControl, ControlLabel, Button } from 'react-bootstrap';
import Header  from '../../components/header';
import PlanetViewModal from './PlanetViewModal';
import { withRouter } from 'react-router-dom';

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
      activePlanet:{},
      numberofSearch:0
    }
  }


  componentWillMount(){
    axios({
      url: `https://swapi.co/api/planets`
    }, {mode: 'cors'}).then((res) =>{
      if(res.data.results.length){
        this.props.getPlanets(res.data.results);
      }
    })
  };
  componentDidMount(){
     
 if(!this.props.activeUser){
   alert("Please Login")
   this.props.history.push('/')
 }
  }

  handleSearchChange(event){
    if(this.state.numberofSearch>15){
      alert('Exceeded number of search')
      return;
    }
    if(event.target.value.length === 0){
      this.props.filteredPlanet(this.props.allPlanets);
         this.setState({numberofSearch:this.state.numberofSearch+1})
    }else{
      let filteredData = this.props.allPlanets.filter((planets) => {
        return planets.name.toUpperCase().includes(event.target.value.toUpperCase());
      })
      this.props.filteredPlanet(filteredData);
     
    }
  };

  handleViewClick(data, event){
    this.setState({open: true, activePlanet: data});
  };

  handleClose(){
    this.setState({ open: false });
  };


  renderPlanetsTemplate(data) {
    return data.map((Obj, i) => {
      return (
          <tr key={i}>
            <td>{Obj.name}</td>
            <td>{Obj.population}</td>
            <td>
              <button onClick={this.handleViewClick.bind(this, Obj)} type="button" title="Edit" className="tbactionbtn bluefont"><i className="fa fa-eye" aria-hidden="true"></i></button>
            </td>
          </tr>
      );
    });
  }

  render() {
    return (
        <div>
          <Header />
            <div className="col-sm-12">
              {this.state.open ? <PlanetViewModal activePlanet={this.state.activePlanet} handleClose={this.handleClose.bind(this)} />: ''}
              <Col className="col-sm-8 col-sm-offset-2">
                <FormControl onChange={this.handleSearchChange.bind(this)} type="text" placeholder="Search planet" />
              </Col>
            </div>
            <div className="col-sm-12">
              <div className="col-sm-8 col-sm-offset-2">
                <div >
                  {(this.props.planets && this.props.planets.length) ?
                      <Table>
                        <thead>
                        <tr>
                          <th width="50%"><span>Planet</span></th>
                          <th width="50%"><span>Population</span></th>
                          <th width="50%"><span>Action</span></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderPlanetsTemplate(this.props.planets)}
                        </tbody>
                      </Table>
                      :
                      <div className="familydl">No Record Founds !</div>
                  }
                  {this.state.open ? <PlanetViewModal  planetDetails={this.state.activePlanet} closeDialog={this.handleClose} /> : null}
                </div>
              </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allPlanets: state.planetReducer.allPlanets,
    activeUser: state.userReducer.activeUser,
    planets: state.planetReducer.planets,
    planetDetails: state.planetReducer.planetDetails,
  };
};

export default withRouter(connect(mapStateToProps, { getPlanets, filteredPlanet, activePlanet })(Planet))


