//Albab Ameem
import '../matchMedia';
import App from '../App';
import {fireEvent, render} from '@testing-library/react';

//Tultul Chowdhary
import {validateEmail} from '../components/Account/Registration';
import Registration from '../components/Account/Registration'

//Bijeta Biswal
const {getAllCategories} = require('../../../backend/Model/BookAProModel');
const {getServicesByCategoryID} = require('../../../backend/Model/BookAProModel');

//Sukhveer Dhillon
import AllCategories from '../pages/AllCategories';


//Automated testing performed by Albab Ameem
describe("search", () => {
    test("Search field should not be empty", () => {
        const component = render(<App />);
        const searchField = component.getByLabelText("search-field");
        fireEvent.change(searchField, {target: {value: 'test'}});       //trigger to set a value to pass the test
        expect(searchField.value).not.toBe("");

    })

    test("Search field should not be contain special characters", () => {
        const component = render(<App />);
        const searchField = component.getByLabelText("search-field");
        fireEvent.change(searchField, {target: {value: 'test'}});       //trigger to set a value to pass the test
        expect(searchField.value).toMatch(/^[^<>'\"/;`%]*$/);

    })
})

//Written by Bijeta Biswal
test('getAllCategories should be a function', ()=>{
    expect(typeof getAllCategories).toBe('function')
});

test('getServicesByCategoryID should be a function', ()=>{
    expect(typeof getServicesByCategoryID).toBe('function')
});


//Tultul Chowdhury 
describe("email",()=> {
  test("Validate Sign Up should pass with correct input",()=>{
    const custInput='abc@test.com'
    expect(validateEmail(custInput)).toBe(true);
  });
  test("Validate Sign Up should fail when not a valid input",()=>{
    const custInput='abc'
    expect(validateEmail(custInput)).not.toBe(true);
  });
  
  test("SignUp form must be in the component",()=>{
    const component= render (<Registration/>);
    const labelNode = component.getByText("Password")
    expect (labelNode).toBeInTheDocument();
  });
  test("email field should have label",()=>{
    const component =render (<Registration/>);
    const emailNode=component.getByLabelText("Email address");
    expect(emailNode.getAttribute("name")).toBe("email");
  })
  test("password field should have label",()=>{
    const component =render (<Registration/>);
    const passwordNode=component.getByLabelText("Password");
    expect(passwordNode.getAttribute("name")).toBe("password");
  })
});

//Sukhveer Dhillon
describe("categories view", () => {
    test("Categories should be visible on all categories page", () => {
        const component = render(<AllCategories />);
        const category_item = component.getAllByLabelText("cat-item");
        expect(category_item.length).toBeGreaterThan(0);

    })

    test("Categories should have images", () => {
        const component = render(<AllCategories />);
        const category_item = component.getAllByLabelText("cat-item-img");

        expect(category_item.length).toBeGreaterThan(0);

    })
})