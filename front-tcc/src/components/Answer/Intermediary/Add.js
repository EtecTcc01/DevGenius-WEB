import './style.css';
import { useState } from 'react';
import api from '../../../api/api';

function AddAnswer() {
    const [answer, setAnswer] = useState('');
    const [taskId, setTaskId] = useState('');
    const [altA, setAltA] = useState('');
    const [altB, setAltB] = useState('');
    const [altC, setAltC] = useState('');
    const [altD, setAltD] = useState('');
    const [altE, setAltE] = useState('');



    async function createAnswer(event) {
        event.preventDefault();

        const dataAsnwer = {answer, taskId,altA,altB, altC, altD, altE}

        try {
            await api.post('/intermediaryAnswer', dataAsnwer)
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
                    value={answer}
                    onChange={(event) => { setAnswer(event.target.value) }}
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

                <input
                    type='text'
                    required
                    placeholder='Insira Alternativa A'
                    value={altA}
                    onChange={(event) => { setAltA(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira Alternativa B'
                    value={altB}
                    onChange={(event) => { setAltB(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira Alternativa C'
                    value={altC}
                    onChange={(event) => { setAltC(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira Alternativa D'
                    value={altD}
                    onChange={(event) => { setAltD(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira Alternativa E'
                    value={altE}
                    onChange={(event) => { setAltE(event.target.value) }}
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