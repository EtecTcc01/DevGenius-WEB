import logo from './logo.svg';
import '../../components/Login/style.css';
import { useState } from 'react';

function App() {

const [userName , setNome] = useState();

const [userEmail , setEmail] = useState('');

const [userPassword , setSenha] = useState('');

const [typeUser , setUser] = useState('');
    
    alert(`NOME: ${userName} EMAIL: ${userEmail} SENHA: ${userPassword} Tipo de Usuário: ${typeUser}`)


    
async function validation (event){
    event.preventDefault();
    try{
        const res = await api.get(`/user/un/${userName}`)
        setNome(res.data.user[0])
    } catch(error) {
        alert(`Erro ao estabelecer conexão com banco de dados. ${error}`)
    }

}

dataUser = {userName, userEmail,userPassword,typeUser}



}

return (
    <div className="App">
    <h1>Login</h1>
    <form onSubmit={Login} className='form'>
        <input 
        type='text' 
        required 
        placeholder='Digite teu nome'
        value={userName}
        onChange={(event)=>{setNome(event.target.value)}}
        >
        
        </input>

        <input 
        type='text' 
        required 
        placeholder='Digite seu email'
        value={userEmail}
        onChange={(event)=>{setEmail(event.target.value)}}
        >
        </input>

        <input 
        type='text' 
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
        value={typeUser}
        onChange={(event)=>{setUser(event.target.value)}}
        >
        </input>

        <button type='submit'>
        Entrar
        </button>

    </form>
    </div>
);


export default App;