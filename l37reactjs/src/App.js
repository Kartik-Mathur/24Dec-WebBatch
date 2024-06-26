import { useEffect, useReducer, useState } from 'react';
import classes from './App.module.css';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [isValidForm, setIsValidForm] = useState(false);

  // Now use effect only runs after stateUpdates thats why it is okay to use
  // it this way now
  useEffect(() => {
    setIsValidForm(
      validEmail && validPassword
    )
    return () => {
      console.log("Cleanup")
    }
  }, [email, password])

  const emailChangeHandler = (ev) => {
    setEmail(ev.target.value);

    setIsValidForm(
      validEmail && validPassword
    )
  }

  const passwordChangeHandler = (ev) => {
    setPassword(ev.target.value);

    setIsValidForm(
      validEmail && validPassword
    )
  }

  const validateEmailHandler = () => {
    setValidEmail(email.includes('@'));
  }

  const validatePasswordHandler = () => {
    setValidPassword(password.trim().length > 5);
  }

  const FormSubmitHandler = (ev) => {
    ev.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={FormSubmitHandler}>
        <div className={`${validEmail === false ? classes.invalid : ''}`}>
          <input
            value={email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            type='text'
            placeholder='Enter email'
          ></input>
        </div>
        <div className={`${validPassword === false ? classes.invalid : ''}`}>
          <input
            value={password}
            onChange={passwordChangeHandler}
            type='password'
            onBlur={validatePasswordHandler}
            placeholder='Enter password'
          ></input>
        </div>
        <button type='submit' disabled={!isValidForm}>Submit</button>
      </form>
    </div>
  );
}

export default App;
