import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

class PlanetViewModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  handleClose() {
    this.setState({ open: false });
    this.props.handleClose();
  };

  render() {
    return (
      <Modal show={this.state.open} >
        <Modal.Header>
          <Modal.Title>Planet Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <label className="col-md-3">Name </label>
            <div className="col-md-2"></div>
            <p className="col-md-6">{this.props.activePlanet.name}</p>
            <label className="col-md-3">Population </label>
            <div className="col-md-2"></div>
            <p className="col-md-6">{this.props.activePlanet.population}</p>
            <label className="col-md-3">Orbital period </label>
            <div className="col-md-2"></div>
            <p className="col-md-6">{this.props.activePlanet.orbital_period}</p>
             <label className="col-md-3">Diameter </label>
            <div className="col-md-2"></div>
            <p className="col-md-6">{this.props.activePlanet.diameter}</p>
             <label className="col-md-3">Rotation period </label>
            <div className="col-md-2"></div>
            <p className="col-md-6">{this.props.activePlanet.rotation_period}</p>
             <label className="col-md-3">Surface water </label>
            <div className="col-md-2"></div>
            <p className="col-md-6">{this.props.activePlanet.surface_water}</p>
             <label className="col-md-3">Terrain </label>
            <div className="col-md-2"></div>
            <p className="col-md-6">{this.props.activePlanet.terrain}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose.bind(this)}>Close</Button>
        </Modal.Footer>

      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allPlanets: state.planetReducer.allPlanets,
    planets: state.planetReducer.planets,
    planetDetails: state.planetReducer.planetDetails,
  };
};

export default connect(mapStateToProps, null)(PlanetViewModal);


