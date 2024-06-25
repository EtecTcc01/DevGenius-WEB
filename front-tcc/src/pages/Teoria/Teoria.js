import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddTeoria from "../../components/Teoria.js/AdicionarTeoria";
import UpTeoria from "../../components/Teoria.js/AtulalizarTeoria";
import DelTeoria from "../../components/Teoria.js/DeletarTeoria";

export default function Teoria(){
    return (
        <div>
            {/* <Link to='/Linguagem'>Curso</Link>
            <Link to='/Stage'>Stage</Link>
            <Link to='/Task'>Task</Link>

            <Link to='/BasicAnswer'>Resposta Básica</Link>
            <Link to='/IntermediaryAnswer'>Resposta Intermediária</Link>
            <Link to='/AdvancedAnswer'>Resposta avançada</Link>

            <Link to='/Group'>Grupos</Link> */}

            <AddTeoria/>
            <UpTeoria/>
            <DelTeoria/>
        </div>
    );

}