import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function UpTeoria() {
    const [name, setName] = useState('');
    const [teory, setTeory] = useState('');
    const [stageId, setStageId] = useState('');
    const [teoryId, setTeoryId] = useState('');

    async function updateLang(event) {
        event.preventDefault();

        const dataTeory = { name, teory, stageId, teoryId}

        try {
            await api.put('/teory', dataTeory)
            alert('Atualizada com sucesso.')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>Atualizar Teoria</h1>
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
                    placeholder='atualizar Teoria'
                    value={teory}
                    onChange={(event) => { setTeory(event.target.value) }}
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
                    placeholder='Insira o ID da teoria'
                    value={teoryId}
                    onChange={(event) => { setTeoryId(event.target.value) }}
                >
                </input>

                <button type='submit'>
                    Atualizar
                </button>
            </form>

            </div>
);
}

export default UpTeoria;