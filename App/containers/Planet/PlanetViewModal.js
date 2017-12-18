import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

const styles = {
  title:{
    fontSize: '15px',
    paddingLeft:'7em',
    fontWeight: 'bold'
  },
  value:{
    paddingRight: '8em',
    float: 'right'
  },
  div:{
    lineHeight: '32px'
  }
} 
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
          <div style={styles.div}><span style={styles.title}>Name</span> <span style={styles.value}>{this.props.activeParentPlanet.name}</span></div>
          <div style={styles.div}><span style={styles.title}>Population</span> <span style={styles.value}>{this.props.activeParentPlanet.population}</span></div>
          <div style={styles.div}><span style={styles.title}>Orbital period</span> <span style={styles.value}>{this.props.activeParentPlanet.orbital_period}</span></div>
          <div style={styles.div}><span style={styles.title}>Diameter</span> <span style={styles.value}>{this.props.activeParentPlanet.diameter}</span></div>
          <div style={styles.div}><span style={styles.title}>Rotation period</span> <span style={styles.value}>{this.props.activeParentPlanet.rotation_period}</span></div>
          <div style={styles.div}><span style={styles.title}>Surface water</span> <span style={styles.value}>{this.props.activeParentPlanet.surface_water}</span></div>
          <div style={styles.div}><span style={styles.title}>Terrain</span> <span style={styles.value}>{this.props.activeParentPlanet.terrain}</span></div>
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


