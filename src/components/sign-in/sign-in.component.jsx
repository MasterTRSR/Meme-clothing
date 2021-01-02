import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'


export default function() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="sign-in">
      <h2> Already have an account </h2>
      <span> sign in with your email and password</span>

      <form>
        <FormInput name='email' type='email' value={email} label='Email' handleChange={(e) => setEmail(e.target.value)} required></FormInput>
        <FormInput name='password' type='password' value={password} label='Password' handleChange={(e) => setPassword(e.target.value)} required></FormInput>
        <CustomButton name='submit' type='submit'> Sign In</CustomButton>
      </form>
    </div>
  )
}


