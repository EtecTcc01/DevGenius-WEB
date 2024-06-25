import React from 'react';
import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function AddTask() {
    const [name, setName] = useState('');
    const [task, setTask] = useState('');
    const [explanation, setExplanation] = useState('');
    const [operationId, setOperationId] = useState('');
    const [stageId, setIdStageId] = useState('');



    async function createTask(event) {
        event.preventDefault();

        const dataTask = {name, task,explanation,operationId, stageId}

        try {
            await api.post('/task', dataTask)
            alert('Task adicionada com sucesso.')
        
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

    



    return (
        <div className="App">

            <h1>Adicionar Atividade</h1>
            <form onSubmit={createTask} className='form'>

                <input
                    type='text'
                    required
                    placeholder='Nome da Atividade'
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Descreva a atividade'
                    value={task}
                    onChange={(event) => { setTask(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Explique a Atividade'
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
                    placeholder='Insira o ID da stage'
                    value={stageId}
                    onChange={(event) => { setIdStageId(event.target.value) }}
                >
                </input>

                <button type='submit'>
                    Adicionar
                </button>
            </form>




        </div>


    );
}

export default AddTask;