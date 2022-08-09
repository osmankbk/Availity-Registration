import { useState } from "react";
import FormInput from "../form-inputs/form-input.component";
import Buttons from "../buttons/buttons.component";
import './sign-up-form.styles.scss'

const initialFormValues = {
  firstName: '',
  lastName: '',
  npiNumber: '', 
  businessAddress: '',
  phoneNumber: '',
  emailAddress: '',
}

const SignUpForm = () => {
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const { firstName, lastName, npiNumber, businessAddress, phoneNumber, emailAddress } = formValues;
  
  const onChangeFormValue = (event) => {
    const { name, value } = event.target;
    return setFormValues({...formValues, [name]: value});
  }

  const resetFormValues = () => {
    setFormValues(initialFormValues);
  }

  const submitForm = (event) => {
    event.preventDefault();
    resetFormValues();
  }

 

  return (
    <div className="sign-up-container">
      <h2>SIGN UP FORM</h2>
      <span>Become A Member Of The Availity Family</span>

      <form onSubmit={ submitForm }>
        <FormInput 
          label='First Name' 
          type="text" 
          required 
          name="firstName" 
          value={firstName} 
          onChange={ onChangeFormValue }
        />

        <FormInput 
          label='Last Name' 
          type="text" 
          required 
          name="lastName" 
          value={lastName} 
          onChange={ onChangeFormValue }
        />

        <FormInput 
          label='NPI Number' 
          type="number" 
          required 
          name="npiNumber" 
          value={npiNumber} 
          onChange={ onChangeFormValue }
        />

        <FormInput 
          label='Business Address' 
          type="text" 
          required 
          name="businessAddress" 
          value={businessAddress} 
          onChange={ onChangeFormValue }
        />
       <FormInput 
          label='Phone Number' 
          type="tel" 
          required 
          name="phoneNumber" 
          value={phoneNumber} 
          onChange={ onChangeFormValue } 
        />
        <FormInput 
          label='Email' 
          type="email" 
          required 
          name="emailAddress" 
          value={emailAddress} 
          onChange={ onChangeFormValue }
        />
        <div className="buttons-container">
          <Buttons
            buttonType='cancle'
            onClick={ submitForm }
            type="button">Cancle
          </Buttons>
          <Buttons
            buttonType='sign-up'
            type="submit">Sign UP
          </Buttons>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm;