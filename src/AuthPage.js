import React, { useState } from 'react';
import { signInUser, signUpUser } from './services/supabase-utils';

export default function AuthPage({ setCurrentUser }) {

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  function clearForms() {
    setSignInEmail('');
    setSignInPassword('');
    setSignUpEmail('');
    setSignUpPassword('');
  }

  async function handleSignUp(e) {
    e.preventDefault(); 

    const user = await signUpUser(signUpEmail, signUpPassword);
    setCurrentUser(user);
    clearForms();
  }

  async function handleSignIn(e) {
    e.preventDefault(); 

    const user = await signInUser(signInEmail, signInPassword);
    setCurrentUser(user);
    clearForms();
  }

  return (
    <div>AuthPage</div>
  );
}
