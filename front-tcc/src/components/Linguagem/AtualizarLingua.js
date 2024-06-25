import './style.css';
import { useState } from 'react';
import api from '../../api/api';


function UpLang() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [groupId, setGroupId] = useState('');
    const [courseId, setCourseId] = useState('');

    async function updateLang(event) {
        event.preventDefault();

        const dataLang = { name, description, icon, groupId, courseId }

        try {
            await api.put('/course', dataLang)
            alert('Atualizada com sucesso.')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>Atualizar Curso</h1>
            <form onSubmit={updateLang} className='form'>

                <input
                    type='text'
                    required
                    placeholder='Atualizar nome'
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                >

                </input>

                <input
                    type='text'
                    required
                    placeholder='atualizar descrição'
                    value={description}
                    onChange={(event) => { setDescription(event.target.value) }}
                >
                </input>

                <input
                type='text'
                required
                placeholder='Colocar o icone'
                value={icon}
                onChange={(event) => { setIcon(event.target.value) }}
                
                >
                    
                </input>

                <input
                type='text'
                required
                placeholder='Coloque o ID do curso'
                value={courseId}
                onChange={(event) => { setCourseId(event.target.value) }}
                
                >
                    
                </input>

                <input
                type='text'
                required
                placeholder='Coloque o ID do grupo'
                value={groupId}
                onChange={(event) => { setGroupId(event.target.value) }}
                
                >
                    
                </input>

                <button type='submit'>
                    Atualizar
                </button>
            </form>

            </div>
);
}

export default UpLang;