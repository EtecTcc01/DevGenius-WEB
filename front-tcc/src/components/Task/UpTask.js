import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function UpTask() {
    const [name, setName] = useState('');
    const [task, setTask] = useState('');
    const [explanation, setExplanation] = useState('');
    const [operationId, setOperationId] = useState('');
    const [stageId, setStageId] = useState('');
    const [taskId, setTaskId] = useState('');

    async function updateTask(event) {
        event.preventDefault();

        const dataTask = { name, task,explanation,operationId, stageId, taskId}

        try {
            await api.put('/task', dataTask)
            alert('Atualizada com sucesso.')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>Atualizar Task</h1>
            <form onSubmit={updateTask} className='form'>

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
                    placeholder='atualizar Teoria'
                    value={task}
                    onChange={(event) => { setTask(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira a explicação'
                    value={explanation}
                    onChange={(event) => { setExplanation(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira o ID da operação'
                    value={operationId}
                    onChange={(event) => { setOperationId(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira o ID do stage'
                    value={stageId}
                    onChange={(event) => { setStageId(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira o ID da task'
                    value={taskId}
                    onChange={(event) => { setTaskId(event.target.value) }}
                >
                </input>

                <button type='submit'>
                    Atualizar
                </button>
            </form>

            </div>
);
}

export default UpTask;