import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddTask from '../../components/Task/AddTask';
import UpTask from '../../components/Task/UpTask';
import DelTask from '../../components/Task/DeleteTask';

export default function Task(){
    return(
        <div>
            {/* <Link to='/Linguagem'>Curso</Link>
            <Link to='/Teoria'>Teoria</Link>
            <Link to='/Stage'>Stage</Link>

            <Link to='/BasicAnswer'>Resposta Básica</Link>
            <Link to='/IntermediaryAnswer'>Resposta Intermediária</Link>
            <Link to='/AdvancedAnswer'>Resposta avançada</Link>

            <Link to='/Group'>Grupos</Link> */}

            <AddTask/>
            <UpTask/>
            <DelTask/>
            
            
        </div>
    );
}