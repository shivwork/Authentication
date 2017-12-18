import React from 'react';
import * as loginActions from '../App/containers/Login/action';

describe('Login  Action Test', () =>{
    it('Register user require name and password: ', () => {
        const data = {
            'name': 'Test',
            'password': '1234'
        }
        const expectedAction = {
            type: 'REGISTER_USER',
            data
        }
        expect(loginActions.registerUser(data)).toEqual(expectedAction)
    })
}) 