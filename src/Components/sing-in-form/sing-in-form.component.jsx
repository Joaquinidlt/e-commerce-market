import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './sing-in-form.styles.scss';
import CustomizedSnackbars from '../snack-bar/snack-bar.component';
import { FcGoogle } from 'react-icons/fc';


const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();

  const [ wrongPassword, setWrongPassword ] = useState(false);
  const [ userNotFound, setUserNotFound ] = useState(false);
  const [ stateSnack, setStateSnack ] = useState(false);
  const [ textState, setTextState ] = useState();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      navigate('/');
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          setTextState('error');
          setWrongPassword(true)
          setStateSnack(true);
          break;
        case 'auth/user-not-found':
          setTextState('error');
          setUserNotFound(true)
          setStateSnack(true);
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
    { textState === "error" && userNotFound && <CustomizedSnackbars state={"error"} message={"No user associated with this email!"} stateSnack={stateSnack} setStateSnack={setStateSnack}/>}
    { textState === "error" && wrongPassword && <CustomizedSnackbars state={"error"} message={"Incorrect password for email!"} stateSnack={stateSnack} setStateSnack={setStateSnack}/>}
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            <FcGoogle size={25}/>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;