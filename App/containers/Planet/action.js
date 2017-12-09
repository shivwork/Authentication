export function getPlanets(planets) {
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

export function activePlanet(planet) {
  return {
    type: 'PLANET_DETAILS_SUCCESS',
    data: planet
  }
}