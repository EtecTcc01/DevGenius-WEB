import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function AddStage() {
    const [name, setName] = useState('');
    const [courseId, setCourseId] = useState('');



    async function createStage(event) {
        event.preventDefault();

        const dataStage = {name, courseId}

        try {
            await api.post('/stage', dataStage)
            alert('Stage criado com sucesso')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

    



    return (
        <div className="App">

            <h1>Adicionar Stage</h1>
            <form onSubmit={createStage} className='form'>

                <input
                    type='text'
                    required
                    placeholder='Nome do'
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='ID do Curso'
                    value={courseId}
                    onChange={(event) => { setCourseId(event.target.value) }}
                >
                </input>


                <button type='submit'>
                    Adicionar
                </button>
            </form>




        </div>


    );
}

export default AddStage;