import { useEffect, useReducer, useState } from 'react';
import classes from './App.module.css';

const passwordReducer = (state,action)=>{
    if(action.type == 'USER_INPUT'){
        return {value:action.value,isValid:action.value.trim().length>5}
    }
    return {value :state.value, isValid: state.isValid}

}

const emailReducer = (state,action)=>{
    if(action.type == 'USER_INPUT'){
        return {value:action.value,isValid:action.value.includes('@')}
    }
    return {value :state.value, isValid: state.isValid}
}


function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [validEmail, setValidEmail] = useState(true);
//   const [validPassword, setValidPassword] = useState(true);
  const [isValidForm, setIsValidForm] = useState(null);

  const [email, dispatchEmail] = useReducer(emailReducer,{
    value: '',
    isValid: null
  })


  const [password, dispatchPassword] = useReducer(passwordReducer,{
    value: '',
    isValid: null
  });

  
  // Now use effect only runs after stateUpdates thats why it is okay to use
  // it this way now
  useEffect(() => {
    setIsValidForm(
        email.isValid && password.isValid
    )
    return () => {
      console.log("Cleanup")
    }
  }, [email.isValid, password.isValid])

  const emailChangeHandler = (ev) => {
    // setEmail(ev.target.value);
    dispatchEmail({
        value:ev.target.value,
        type: 'USER_INPUT'
    })

    // setIsValidForm(
    //   validEmail && validPassword
    // )
    setIsValidForm(
        password.isValid && email.isValid
      )
  }

  const passwordChangeHandler = (ev) => {
    // setPassword(ev.target.value);
    dispatchPassword({
        value:ev.target.value,
        type: 'USER_INPUT'
    })

    setIsValidForm(
      password.isValid && email.isValid
    )
  }

  const validateEmailHandler = () => {
    // setValidEmail(email.includes('@'));
    dispatchEmail({
        value:ev.target.value,
        type: 'USER_INPUT'
    })
  }

  const validatePasswordHandler = () => {
    // setValidPassword(password.trim().length > 5);
  }

  const FormSubmitHandler = (ev) => {
    ev.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={FormSubmitHandler}>
        <div className={`${email.isValid === false ? classes.invalid : ''}`}>
          <input
            value={email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            type='text'
            placeholder='Enter email'
          ></input>
        </div>
        <div className={`${password.isValid === false ? classes.invalid : ''}`}>
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
