import './style.css';
import { useState } from 'react';
import api from '../../api/api';

function AddGroup() {
    const [name, setName] = useState('');



    async function createGroup(event) {
        event.preventDefault();

        const dataGroup = {name}

        try {
            await api.post('/group', dataGroup)
            alert('Grupo adicionada com sucesso.')
        } catch (error) {
            alert(`Erro ao adicionar ${error}`)
        }

    }

    



    return (
        <div className="App">

            <h1>Adicionar Grupo</h1>
            <form onSubmit={createGroup} className='form'>

                <input
                    type='text'
                    required
                    placeholder='Nome do Grupo'
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                >
                </input>


                <button type='submit'>
                    Adicionar
                </button>
            </form>




        </div>


    );
}

export default AddGroup;