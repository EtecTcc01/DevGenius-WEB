import './style.css';
import { useState } from 'react';
import api from '../../api/api';


function DelLang() {

    const [courseId, setCourseId] = useState('');

    async function DeleteLang(event) {
        event.preventDefault();

        

        try {
            await api.delete(`/course/${courseId}`)
            alert('Deletada com sucesso.')
        } catch (error) {
            alert(`Erro ao deletar ${error}`)
        }

    }

return(

    <div className="App">

    <h1>deletar Curso</h1>
            <form onSubmit={DeleteLang} className='form'>

                <input
                type='text'
                required
                placeholder='Id do curso para deletar'
                value={courseId}
                onChange={(event) => { setCourseId(event.target.value) }}  
                >
                    
                </input>

                <button type='submit'>
                    deletar
                </button>
            </form>

            </div>
);
}

export default DelLang;