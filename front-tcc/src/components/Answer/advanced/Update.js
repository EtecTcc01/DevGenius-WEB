import './style.css';
import { useState } from 'react';
import api from '../../../api/api';

function UpAnswer() {
    const [code, setCode] = useState('');
    const [answerId, setAnswerId] = useState('');

    async function updateAnswer(event) {
        event.preventDefault();

        const dataAnswer = { code, answerId}

        try {
            await api.put('/advancedAnswer', dataAnswer)
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
                    value={code}
                    onChange={(event) => { setCode(event.target.value) }}
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