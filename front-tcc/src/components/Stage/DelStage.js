import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function DelStage() {

    const [stageId, setStageId] = useState('');

    async function deleteStage(event) {
        event.preventDefault();

        try {
            await api.delete(`/stage/${stageId}`)
            
                alert('Deletada com sucesso.')
        } catch (error) {
            alert(`Erro ao deletar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>deletar stage</h1>
            <form onSubmit={deleteStage} className='form'>

                <input
                type='text'
                required
                placeholder='Id da Teoria para deletar'
                value={stageId}
                onChange={(event) => { setStageId(event.target.value) }}  
                >
                    
                </input>

                <button type='submit'>
                    deletar
                </button>
            </form>

            </div>
);
}

export default DelStage;