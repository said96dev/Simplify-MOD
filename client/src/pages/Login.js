import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LoginPage'
import { FormRow, Alert } from '../components'
import { AppContext } from '../context/appContext'
import img from '../assets/images/Meteor.svg'

const initialState = {
  email: '',
  password: '',
  isMember: true,
}

function Login() {
  const { user, isLoading, showAlert, displayAlert, loginUser } =
    useContext(AppContext)
  const [values, setValues] = useState(initialState)
  const navigate = useNavigate()
  // global state and useNavigate
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { email, password, isMember } = values
    if (!email || !password || !isMember) {
      displayAlert()
      return
    } else if (!isMember) {
      console.log('You have no access')
    } else {
      const currentUser = { email, password }
      loginUser(currentUser)
    }
  }
  const demoUser = (e) => {
    e.preventDefault()
    const email = 'user@gmail.com'
    const password = '123456'
    const currentUser = { email, password }
    loginUser(currentUser)
  }

  return (
    <Wrapper className='full-page'>
      <form action='' className='Loginform'>
        <h3>Login</h3>
        {showAlert && <Alert />}
        <div className='form-row'>
          <FormRow
            type='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
          />
          <FormRow
            type='password'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />
        </div>
        <button
          type='submit'
          className='btn btn-block'
          disabled={isLoading}
          onClick={onSubmit}
        >
          submit
        </button>
        <button
          type='submit'
          className='btn btn-block btn-success'
          disabled={isLoading}
          onClick={demoUser}
        >
          Demo App
        </button>
      </form>
      <div className='Login-img'>
        <img src={img} alt='not found' />
        <h1>Simplify</h1>
      </div>
    </Wrapper>
  )
}

export default Login