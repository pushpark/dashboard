import { useState } from "react"
import Cookies from 'js-cookie'
import {Navigate,useNavigate} from 'react-router-dom'
import './index.css'

const Login =()=>{
  const [username,setUsername] = useState("globaluser")
  const [password,setPassword] = useState("user123")
  const navigate=useNavigate()

  const onChangeUsername = (event) => setUsername(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  const onClickSubmit = async event => {
    event.preventDefault()
    Cookies.set('token', 'login', {
      expires: 30,
      path: '/',
    })
    navigate('/dashboard')
  }
    
  const token = Cookies.get('token')
    if (token !== undefined) {
      return <Navigate to="/dashboard" />
    }

  return (
      <div className="login-container1">
        <div className="login-form-container">
          <h1 className='login-heading'>Login To Users Dashboard</h1>
          <form
            className="login-form1"
            type="submit"
            onSubmit={onClickSubmit}
          >
            <label className="label1" htmlFor="username">
              USERNAME
            </label>
            <input
              className="input1"
              id="username"
              placeholder="Username"
              onChange={onChangeUsername}
              value={username}
            />

            <label className="label1" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="input1"
              id="password"
              type="password"
              placeholder="Password"
              onChange={onChangePassword}
              value={password}
            />
            <button type="submit" className="login-button1">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  
}
export default Login