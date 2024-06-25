// Naveg Pagina
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';

import './App.css';

//usuario
import LoginDev from './pages/Login/LoginDev';


//Linguagem
import Linguagem from './pages/Linguagem/Linguagem';


//Teoria
import Teoria from './pages/Teoria/Teoria';
import Register from './components/Register';

//Task
import Task from './pages/Task/Task';

//Stage
import Stage from './pages/Stage/Stage';

//Answer
import BasicAnswer from './pages/Answer/Basic';
import IntermediaryAnswer from './pages/Answer/Intermediary';
import AdvancedAnswer from './pages/Answer/Advanced';

import Group from './pages/Group/Group';

function App() {
return (
    <div className="App">
    <div>
        <BrowserRouter>
            <Container>
                <Routes>
                
                <Route index element={<LoginDev/>}/>
                        
                        <Route path='/Register' element={<Register/>}/>
                <Route path='/' element={<NavBar/>}>
                        <Route path='/Linguagem' element={<Linguagem/>}/>
                        <Route path='/Teoria' element={<Teoria/>}/>

                        <Route path='/Task' element={<Task/>}/>

                        <Route path='/Stage' element={<Stage/>}/>

                        <Route path='/BasicAnswer' element={<BasicAnswer/>}/>
                        <Route path='/IntermediaryAnswer' element={<IntermediaryAnswer/>}/>
                        <Route path='/AdvancedAnswer' element={<AdvancedAnswer/>}/>

                        <Route path='/Group' element={<Group/>}/>
            </Route>
                        
                        

                </Routes>
            </Container>
        </BrowserRouter>
    </div>
    </div>  
);
}

export default App;