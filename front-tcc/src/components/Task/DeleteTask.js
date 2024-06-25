import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function DelTask() {

    const [taskId, setTaskId] = useState('');

    async function deleteTask(event) {
        event.preventDefault();

        const dataTask = {taskId}

        try {
            await api.delete(`/task/${taskId}`)
            alert('Deletada com sucesso.')
        } catch (error) {
            alert(`Erro ao deletar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>deletar Task</h1>
            <form onSubmit={deleteTask} className='form'>

                <input
                type='text'
                required
                placeholder='Id da Task para deletar'
                value={taskId}
                onChange={(event) => { setTaskId(event.target.value) }}  
                >
                    
                </input>

                <button type='submit'>
                    deletar
                </button>
            </form>

            </div>
);
}

export default DelTask;