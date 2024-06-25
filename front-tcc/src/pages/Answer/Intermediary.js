import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddAnswer from '../../components/Answer/Intermediary/Add';
import UpAnswer from '../../components/Answer/Intermediary/Update';
import DelAnswer from '../../components/Answer/Intermediary/Delete';

export default function IntermediaryAnswer(){
    return(
        <div>
            {/* <Link to='/Linguagem'>Curso</Link>
            <Link to='/Teoria'>Teoria</Link>
            <Link to='/Stage'>Stage</Link>
            <Link to='/Task'>Task</Link>

            <Link to='/BasicAnswer'>Resposta Básica</Link>
            <Link to='/AdvancedAnswer'>Resposta avançada</Link>

            <Link to='/Group'>Grupos</Link> */}

            <AddAnswer/>
            <UpAnswer/>
            <DelAnswer/>
            
            
        </div>
    );
}


