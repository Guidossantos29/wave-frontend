import React from 'react'
import { Link } from 'react-router-dom'

import { useState,useEffect } from 'react'
import { FormContainer, InputContainer } from './style';

function Register() {

const handleSubmit = (e) => {
  e.preventDefault();
}



  return (
    <>
    <FormContainer>
      <h1>Wave</h1>
      <p>cadastre-se e se junto aos seus amigos</p>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='E-mail' />
          <input type="text" placeholder='Password' />
          <input type="text" placeholder='confirm Password' />
        </InputContainer>
        <button>Registrar</button>
      </form>  
      <p>Ja tem conta? <Link to='/login'>Clique aqui</Link></p>
    </FormContainer>
    </>
  )
}

export default Register
