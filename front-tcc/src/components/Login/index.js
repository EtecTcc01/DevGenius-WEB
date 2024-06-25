import './style.css';
import { useState } from 'react';
import api from '../../api/api';
import { BrowserRouter, Routes, Route, Link, useNavigate  } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

const [userEmail , setEmail] = useState('');

const [userPassword , setSenha] = useState('');


async function validation (event){
    event.preventDefault();

    const dataUser = {userEmail, userPassword}

    try{
        await api.post(`/user/validation`, dataUser)
        alert('Login realizado') 
        navigate("/Linguagem");
    } catch(error) {
        alert(`Falha ao realizar Login ${error}`)
    }

}

return (
    <div className="App">
    <h1>Login</h1>
    <form onSubmit={validation} className='form'>

        <input 
        type='email' 
        required 
        placeholder='Digite seu email'
        value={userEmail}
        onChange={(event)=>{setEmail(event.target.value)}}
        >
        </input>

        <input 
        type='password' 
        required 
        placeholder='Digite sua senha'
        value={userPassword}
        onChange={(event)=>{setSenha(event.target.value)}}
        >
        </input>

        
        
        <button type='submit' >
        Entrar
        </button>

        
        
    </form>
        <button  type='button'>
        <Link to='/Register'>Criar cadastro</Link>
        </button>
    </div>
);
}

export default Login;