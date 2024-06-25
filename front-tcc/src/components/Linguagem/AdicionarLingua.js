import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function AddLang() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [groupId, setGroupId] = useState('');




    async function createCourse(event) {
        event.preventDefault();

        const course = { name, description, icon, groupId }

        try {
            await api.post('/course', course)
            alert('Curso criado com sucesso.')
        } catch (error) {
            alert(`Erro ao criar curso ${error}`)
        }

    }

    



    return (
        <div className="App">

            <h1>Adicionar Curso</h1>
            <form onSubmit={createCourse} className='form'>
                
                <input
                    type='text'
                    required
                    placeholder='Adicione o curso'
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                >

                </input>

                <input
                    type='text'
                    required
                    placeholder='Descreva o curso'
                    value={description}
                    onChange={(event) => { setDescription(event.target.value) }}
                >

                </input>

                <input
                    type='text'
                    required
                    placeholder='Id do Grupo'
                    value={groupId}
                    onChange={(event) => {    setGroupId(event.target.value)}}>

                    </input>

                    <input
                    type='text'
                    required
                    placeholder='insira o icone'
                    value={icon}
                    onChange={(event) => {    setIcon(event.target.value)}}>
                        
                    </input>

                <button type='submit'>
                    Adicionar
                </button>
            </form>




        </div>


    );
}

export default AddLang;