import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function AddTeoria() {
    const [name, setName] = useState('');
    const [teory, setTeory] = useState('');
    const [stageId, setIdStageId] = useState('');



    async function createTeory(event) {
        event.preventDefault();

        const dataTeory = {name, teory, stageId}

        try {
            await api.post('/teory', dataTeory)
            alert('Teoria adicionada com sucesso.')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

    



    return (
        <div className="App">

            <h1>Adicionar Teoria</h1>
            <form onSubmit={createTeory} className='form'>

                <input
                    type='text'
                    required
                    placeholder='Nome da Teoria'
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Descreva a teoria'
                    value={teory}
                    onChange={(event) => { setTeory(event.target.value) }}
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

export default AddTeoria;