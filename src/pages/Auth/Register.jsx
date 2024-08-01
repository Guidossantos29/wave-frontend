import React from 'react'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { FormContainer, InputContainer } from './style';

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmpassword,
    }
    console.log(user);
  }



  return (
    <>
      <FormContainer>
        <h1>Wave</h1>
        <p>cadastre-se e se junto aos seus amigos</p>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <input
              type="text"
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              value={name || ""} />

            <input
              type="text"
              placeholder='E-mail'
              onChange={(e) => setEmail(e.target.value)}
              value={email || ""} />

            <input
              type="password"
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password || ""} />

            <input
              type="password"
              placeholder='confirm Password'
              onChange={(e) => setconfirmpassword(e.target.value)}
              value={confirmpassword || ""} />

          </InputContainer>
          <button>Registrar</button>
        </form>
        <p>Ja tem conta? <Link to='/login'>Clique aqui</Link></p>
      </FormContainer>
    </>
  )
}

export default Register
