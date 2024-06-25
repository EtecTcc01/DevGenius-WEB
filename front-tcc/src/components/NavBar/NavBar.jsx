import { Link, NavLink, Outlet } from 'react-router-dom'
import styles from './NavBar.module.css'

import Container from '../Container/Container'

export default function NavBar() {
    return(
        <div>
            <Container>

                <ul className={styles.list}>
                    

                    

                    <li className={styles.item}>
                        <Link to='/Linguagem'>Curso</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/Teoria'>Teorias</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/Task'>Atividade</Link>
                    </li>
                    
                    <li className={styles.item}>
                        <Link to='/Stage'>Estágio</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/BasicAnswer'>Resposta Básica</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/IntermediaryAnswer'>Resposta Intermediária</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/AdvancedAnswer'>Resposta Avançada</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/Group'>Grupos</Link>
                    </li>


                    
                </ul>
            </Container>
            <Outlet/>
        </div>
    )
}