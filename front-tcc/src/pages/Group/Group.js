import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddGroup from '../../components/Group/AddGroup';
import UpGroup from '../../components/Group/UpGroup';
import DelGroup from '../../components/Group/DelGroup';


export default function Group(){
    return (
        <div>
            {/* <Link to='/Linguagem'>Curso</Link>
            <Link to='/Teoria'>Teoria</Link>
            <Link to='/Stage'>Stage</Link>
            <Link to='/Task'>Task</Link>

            <Link to='/BasicAnswer'>Resposta Básica</Link>
            <Link to='/IntermediaryAnswer'>Resposta Intermediária</Link>
            <Link to='/AdvancedAnswer'>Resposta avançada</Link> */}

            <AddGroup/>
            <UpGroup/>
            <DelGroup/>
        </div>
    );

}