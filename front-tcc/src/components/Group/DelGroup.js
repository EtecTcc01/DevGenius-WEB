import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function DelGroup() {

    const [groupId, setGroupId] = useState('');

    async function deleteGroup(event) {
        event.preventDefault();

        const dataGroup = {groupId}

        try {
            await api.delete(`/group/${groupId}`)
            alert('Deletada com sucesso.')
        } catch (error) {
            alert(`Erro ao deletar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>deletar Grupo</h1>
            <form onSubmit={deleteGroup} className='form'>

                <input
                type='text'
                required
                placeholder='Id do Grupo para deletar'
                value={groupId}
                onChange={(event) => { setGroupId(event.target.value) }}  
                >
                    
                </input>

                <button type='submit'>
                    deletar
                </button>
            </form>

            </div>
);
}

export default DelGroup;