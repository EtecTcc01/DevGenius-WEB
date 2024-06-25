import './style.css';
import { useState } from 'react';
import api from '../../../api/api';

function DelAnswer() {

    const [answerId, setAnswerId] = useState('');

    async function deleteAnswer(event) {
        event.preventDefault();

        const dataAnswer = {answerId}

        try {
            await api.delete(`/basicAnswer/${answerId}`)
            alert('Deletada com sucesso.')
        } catch (error) {
            alert(`Erro ao deletar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>deletar stage</h1>
            <form onSubmit={deleteAnswer} className='form'>

                <input
                type='text'
                required
                placeholder='Id da Task para deletar'
                value={answerId}
                onChange={(event) => { setAnswerId(event.target.value) }}  
                >
                    
                </input>

                <button type='submit'>
                    deletar
                </button>
            </form>

            </div>
);
}

export default DelAnswer;