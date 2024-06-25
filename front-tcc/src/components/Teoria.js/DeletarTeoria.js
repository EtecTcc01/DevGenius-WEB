import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function DelTeoria() {

    const [teoryId, setTeoryId] = useState('');

    async function deleteTeory(event) {
        event.preventDefault();

        const dataTeory = {teoryId}

        try {
            await api.delete(`/teory/${teoryId}`)
            alert('Deletada com sucesso.')
        } catch (error) {
            alert(`Erro ao deletar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>deletar Teoria</h1>
            <form onSubmit={deleteTeory} className='form'>

                <input
                type='text'
                required
                placeholder='Id da Teoria para deletar'
                value={teoryId}
                onChange={(event) => { setTeoryId(event.target.value) }}  
                >
                    
                </input>

                <button type='submit'>
                    deletar
                </button>
            </form>

            </div>
);
}

export default DelTeoria;