import './style.css';
import { useState } from 'react';
import api from '../../api/api';
import { BrowserRouter, Routes, Route, Link, useNavigate  } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const [userName , setNome] = useState('');

    const [userEmail , setEmail] = useState('');
    
    const [userPassword , setSenha] = useState('');
    
    const [userType , setUser] = useState('');



async function register (event){
    event.preventDefault();

    const dataUser = {userEmail, userName, userPassword, userType}

    try{
        await api.post(`/user/register`, dataUser)
        alert('Cadastro realizado')
        navigate("/Linguagem");
    } catch(error) {
        alert(`Erro ao adicionar${error}`)
    }

}

return (
    <div className="App">
    <h1>Cadastro</h1>
    <form onSubmit={register} className='form'>
        <input 
        type='text' 
        required 
        placeholder='Digite teu nome'
        value={userName}
        onChange={(event)=>{setNome(event.target.value)}}
        >
        
        </input>

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

        <input 
        type='text' 
        required 
        placeholder='Tipo de usuário'
        value={userType}
        onChange={(event)=>{setUser(event.target.value)}}
        >
        </input>

        <button type='submit'>
        Cadastrar
        </button>
    </form>
    </div>
);
}

export default Register;