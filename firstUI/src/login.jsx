import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('fill the 2 boxes')
    } else {
      console.log('login submitted :', { email, password });
      alert('logged in!')
      navigate('/home')
    }
  }

  return (
    <div className='container'>
      <div className="card">
        <h1 className='hd'>LOGIN</h1>
        <form onSubmit={handleSubmit}>

          <div className='input'>
            <label>E-MAIL </label>
            <input className='form-control' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter your email' />
          </div>

          <div className='input'>
            <label>PASSWORD </label>
            <input className='form-control' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter the password' />
          </div>


          <button onClick={handleSubmit} type='submit' className='btn'>LOGIN</button>

        </form>
      </div>
    </div>
  )
}

export default Login