import React from 'react';
import { shallow } from 'enzyme';
import { planetReducer }  from '../App/containers/Planet/reducer';

describe('planet reducer', () =>{
     it('should return the initial state', () => {
    expect(planetReducer(undefined, {})).toEqual(
        {
            planets: [],
            fetchPlanetLoading: false
        }
    )
  })
}) 