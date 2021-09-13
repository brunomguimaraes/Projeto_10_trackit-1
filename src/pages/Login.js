import Logoimg from '../assets/css/img/Logo.png'
import { Link } from "react-router-dom";
import { Inputs, Logo, Button, Go, Container} from "./shared-Login&Registration/components";
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function Login(event) {
        event.preventDefault();
        const body = {
            email,
            password
        }
        console.log(body)

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body)
        .then (res => {
            console.log(res.data)
            history.push('/Habitos');
        })
        .catch ( error => error (alert('Seus dados não foram encontrados 🤔, se cadastra aí 😉')))
    }

    return (
        <form onSubmit={Login}>
            <Container>
                <Logo src={Logoimg}/>
                <Inputs placeholder='email' type='email' value={email} onChange= {e => setEmail (e.target.value)} required/>
                <Inputs placeholder='senha' type='password' value={password} onChange= {e => setPassword (e.target.value)} required/>
                <Button type='submit'>Entrar</Button>
                <Link to='/cadastro'>
                    <Go>Não tem uma conta? Cadastre-se!</Go>
                </Link>
            </Container>
        </form>    
    );
}