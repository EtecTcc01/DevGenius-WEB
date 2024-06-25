import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function UpStage() {
    const [name, setName] = useState('');
    const [courseId, setCourseId] = useState('');
    const [stageId, setStageId] = useState('');
    

    async function updateStage(event) {
        event.preventDefault();

        const dataStage = { name, courseId, stageId}

        try {
            await api.put('/stage', dataStage)
            alert('Atualizada com sucesso.')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>Atualizar Stage</h1>
            <form onSubmit={updateStage} className='form'>

                <input
                    type='text'
                    required
                    placeholder='Atualizar nome do Stage'
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                >

                </input>

                <input
                    type='text'
                    required
                    placeholder='insira o ID do curso '
                    value={courseId}
                    onChange={(event) => { setCourseId(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira o ID do estagio'
                    value={stageId}
                    onChange={(event) => { setStageId(event.target.value) }}
                >
                </input>
                

                <button type='submit'>
                    Atualizar
                </button>
            </form>

            </div>
);
}

export default UpStage;