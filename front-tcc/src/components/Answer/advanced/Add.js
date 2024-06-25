import './style.css';
import { useState } from 'react';
import api from '../../../api/api';

function AddAnswer() {
    const [code, setCode] = useState('');
    const [taskId, setTaskId] = useState('');




    async function createAnswer(event) {
        event.preventDefault();

        const dataAsnwer = {code, taskId}

        try {
            await api.post('/advancedAnswer', dataAsnwer)
            alert('Resposta adicionada com sucesso.')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

    



    return (
        <div className="App">

            <h1>Adicionar Resposta</h1>
            <form onSubmit={createAnswer} className='form'>

                <input
                    type='text'
                    required
                    placeholder='Resposta'
                    value={code}
                    onChange={(event) => { setCode(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Id da Task'
                    value={taskId}
                    onChange={(event) => { setTaskId(event.target.value) }}
                >
                </input>


                <button type='submit'>
                    Adicionar
                </button>
            </form>




        </div>


    );
}

export default AddAnswer;