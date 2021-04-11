// import {getAllCategories} from './BookAProModel'

const {getAllCategories} = require('./BookAProModel')
const {getServicesByCategoryID} = require('./BookAProModel')

//Written by Bijeta Biswal
test('getAllCategories should be a function', ()=>{
    expect(typeof getAllCategories).toBe('function')
});

test('getServicesByCategoryID should be a function', ()=>{
    expect(typeof getServicesByCategoryID).toBe('function')
});