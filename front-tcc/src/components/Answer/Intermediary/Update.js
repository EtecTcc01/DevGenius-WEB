import './style.css';
import { useState } from 'react';
import api from '../../../api/api';

function UpAnswer() {
    const [answer, setAnswer] = useState('');
    const [taskId, setTaskId] = useState('');
    const [altA, setAltA] = useState('');
    const [altB, setAltB] = useState('');
    const [altC, setAltC] = useState('');
    const [altD, setAltD] = useState('');
    const [altE, setAltE] = useState('');
    const [answerId, setAnswerId] = useState('');

    async function updateAnswer(event) {
        event.preventDefault();

        const dataAnswer = { answer, taskId, altA,altB,altC, altD, altE, answerId}

        try {
            await api.put('/intermediaryAnswer', dataAnswer)
            alert('Atualizada com sucesso.')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>Atualizar Resposta</h1>
            <form onSubmit={updateAnswer} className='form'>

                <input
                    type='text'
                    required
                    placeholder='Atualizar Resposta'
                    value={answer}
                    onChange={(event) => { setAnswer(event.target.value) }}
                >

                </input>

                <input
                    type='text'
                    required
                    placeholder='ID da Task'
                    value={taskId}
                    onChange={(event) => { setTaskId(event.target.value) }}
                >

                </input>

                <input
                    type='text'
                    required
                    placeholder='atualizar Alternativa A'
                    value={altA}
                    onChange={(event) => { setAltA(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='atualizar Alternativa B'
                    value={altB}
                    onChange={(event) => { setAltB(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='atualizar Alternativa C'
                    value={altC}
                    onChange={(event) => { setAltC(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='atualizar Alternativa D'
                    value={altD}
                    onChange={(event) => { setAltD(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='atualizar Alternativa E'
                    value={altE}
                    onChange={(event) => { setAltE(event.target.value) }}
                >
                </input>

                <input
                    type='text'
                    required
                    placeholder='Insira o ID da resposta'
                    value={answerId}
                    onChange={(event) => { setAnswerId(event.target.value) }}
                >
                </input>

                
                <button type='submit'>
                    Atualizar
                </button>
            </form>

            </div>
);
}

export default UpAnswer;