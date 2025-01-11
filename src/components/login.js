import React, { useState } from 'react'
import './css/login.css'
import './css/signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from './redux/userData/userSlice'

const Login = () => {
  // const userData = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [signInFormData, setSignInFormData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState(null);

  // console.log("UserData-login", userData);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login credentials submitted:', signInFormData);

    const url = 'https://open-link-backend.onrender.com/api/v1/users/login'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInFormData),
      })

      const data = await response.json();

      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(addUser(data));
        const userFirstName = data.user.name.split(' ')[0];
        const userFirstNameCapitalized = userFirstName.charAt(0).toUpperCase() + userFirstName.slice(1);
        navigate('/');
        alert(`Welcome back ${userFirstNameCapitalized}!`);
      }
      else {
        setError(data.message)
      } 
    } catch (error) {
      console.log('Error', error);
      setError("An error occurred.")
    }
  }

  return (



    <div className='login_container'>
      <div className='signIn_form'>
        <form onSubmit={handleSubmit}>
          <h1>Log in</h1>
          <br />
          <label htmlFor='email'>Email <span>*</span></label>
          <br />
          <input
            type='email'
            name='email'
            id='email'
            value={signInFormData.email}
            onChange={handleChange}
            aria-label='Email'
            required
          />
          <br />
          <label htmlFor='password'>Password <span>*</span></label>
          <br />
          <input
            type='password'
            name='password'
            id='password'
            value={signInFormData.password}
            onChange={handleChange}
            aria-label='Password'
            required
          />
          <br />
          {error && <p className='error_message'>{`${error}. Please try again...`}</p>}
          <button type='submit'>Log in</button>
          <p className='form_text'>By continuing, you agree to our <strong>Terms of Service</strong> and acknowledge that you have read our <strong>Privacy Policy</strong>.</p>
        </form>
        <p className='login_text'>Don't have an account? <span><Link className='login' to='/signup'>Sign up</Link></span></p>
      </div>
    </div>
  )
}

export default Login