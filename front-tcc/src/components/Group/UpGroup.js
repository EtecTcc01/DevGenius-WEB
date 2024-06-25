import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function UpGroup() {
    const [name, setName] = useState('');
    const [groupId, setGroupId] = useState('');


    async function updateGroup(event) {
        event.preventDefault();

        const dataGroup = { name, groupId}

        try {
            await api.put('/group', dataGroup)
            alert('Atualizada com sucesso.')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>Atualizar Grupo</h1>
            <form onSubmit={updateGroup} className='form'>

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
                    placeholder='Insira o ID do Grupo'
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

export default UpGroup;