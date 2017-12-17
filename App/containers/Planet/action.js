export function getPlanetsRequest() {
  return {
    type: 'GET_PLANETS_REQUEST',
  }
}

export function getPlanetsSuccess(planets) {
  return {
    type: 'GET_PLANETS_SUCCESS',
    data: planets
  }
}

export function filteredPlanet(planets) {
  return {
    type: 'FILTER_PLANETS_SUCCESS',
    data: planets
  }
}

export function activePlanet(planet) {    //  When user clicks a planet
  return {
    type: 'PLANET_DETAILS_SUCCESS',
    data: planet
  }
}