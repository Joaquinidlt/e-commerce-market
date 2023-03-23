import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import CustomizedSnackbars from '../snack-bar/snack-bar.component';
import { SignUpContainer } from './sign-up-form.styles.jsx';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const [ stateSnack, setStateSnack ] = useState(false);
  const [ showCreated, setShowCreated ] = useState(false);
  const [ mailUsed, setMailUsed ] = useState(false);
  const [ textState, setTextState ] = useState();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setTextState('success');
      setShowCreated(true)
      setStateSnack(true);
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setTextState('error');
        setMailUsed(true)
        setStateSnack(true);
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      { textState === "success" && showCreated && <CustomizedSnackbars state={"success"} message={"Account successfully created!"} stateSnack={stateSnack} setStateSnack={setStateSnack}/>}
      { textState === "error" && mailUsed && <CustomizedSnackbars state={"error"} message={"Cannot create user, email already in use!"} stateSnack={stateSnack} setStateSnack={setStateSnack}/>}
      
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;