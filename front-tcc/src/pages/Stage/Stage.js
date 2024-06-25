import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddStage from '../../components/Stage/AddStage';
import UpStage from '../../components/Stage/AtulStage';
import DelStage from '../../components/Stage/DelStage';

export default function Task(){
    return(
        <div>
            {/* <Link to='/Linguagem'>Curso</Link>
            <Link to='/Teoria'>Teoria</Link>
            <Link to='/Task'>Task</Link>

            <Link to='/BasicAnswer'>Resposta Básica</Link>
            <Link to='/IntermediaryAnswer'>Resposta Intermediária</Link>
            <Link to='/AdvancedAnswer'>Resposta avançada</Link>

            <Link to='/Group'>Grupos</Link> */}

            <AddStage/>
            <UpStage/>
            <DelStage/>
            
            
        </div>
    );
}