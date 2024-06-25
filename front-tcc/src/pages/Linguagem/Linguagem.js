import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddLang from '../../components/Linguagem/AdicionarLingua';
import UpLang from '../../components/Linguagem/AtualizarLingua';
import DelLang from '../../components/Linguagem/DeleteLingua';


export default function Linguagem(){
    return (
        <div>
            
            {/* <Link to='/Teoria'>Teoria</Link>
            <Link to='/Stage'>Stage</Link>
            <Link to='/Task'>Task</Link>

            <Link to='/BasicAnswer'>Resposta Básica</Link>
            <Link to='/IntermediaryAnswer'>Resposta Intermediária</Link>
            <Link to='/AdvancedAnswer'>Resposta avançada</Link>

            <Link to='/Group'>Grupos</Link> */}

            <AddLang/>
            <UpLang/>
            <DelLang/>
            
        </div>
    );

}