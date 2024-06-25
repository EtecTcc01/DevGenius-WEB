import './style.css';
import { useState } from 'react';
// import api from '../../api/api';
import api from '../../../api/api';

function UpAnswer() {
    const [answer, setAnswer] = useState('');
    const [altA, setAltA] = useState('');
    const [altB, setAltB] = useState('');
    const [altC, setAltC] = useState('');
    const [answerId, setAnswerId] = useState('');

    async function updateAnswer(event) {
        event.preventDefault();

        const dataAnswer = { answer, altA,altB,altC, answerId}

        try {
            await api.put('/basicAnswer', dataAnswer)
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