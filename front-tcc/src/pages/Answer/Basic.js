import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddAnswer from '../../components/Answer/Basic/add';
import UpAnswer from '../../components/Answer/Basic/Update';
import DelAnswer from '../../components/Answer/Basic/Delete';

export default function BasicAnswer(){
    return(
        <div>
            {/* <Link to='/Linguagem'>Curso</Link>
            <Link to='/Teoria'>Teoria</Link>
            <Link to='/Stage'>Stage</Link>
            <Link to='/Task'>Task</Link>


            <Link to='/IntermediaryAnswer'>Resposta Intermediária</Link>
            <Link to='/AdvancedAnswer'>Resposta avançada</Link>

            <Link to='/Group'>Grupos</Link> */}

            <AddAnswer/>
            <UpAnswer/>
            <DelAnswer/>
            
            
        </div>
    );
}