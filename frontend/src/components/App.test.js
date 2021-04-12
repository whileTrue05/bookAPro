import {validateEmail} from './Account/Registration';
import Registration from './Account/Registration'
import {  render } from '@testing-library/react';

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