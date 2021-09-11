import Logoimg from '../assets/css/img/Logo.png'
import { Link } from "react-router-dom";
import { Inputs, Logo, Button, Go, Container} from "./shared-Login&Registration/components";
import { useState } from 'react';
import axios from 'axios';

export default function RegistrationPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    function Registration(event) {
        event.preventDefault();
        const body = {
            email,
            password,
            name,
            image
        }
        console.log(body)

        axios.post ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body)
        .then (res => {
            console.log(res.data)
        })
        .catch(alert('opa, ocorreu um erro na realização do seu cadastro 🙁'))
    }

    return(
        <form onSubmit={Registration}>
            <Container>
                <Logo src={Logoimg}/>
                <Inputs placeholder='email' type='email' value={email} onChange= {e => setEmail(e.target.value)} required/>
                <Inputs placeholder='senha' type='password' value={password} onChange= {e => setPassword(e.target.value)} required/>
                <Inputs placeholder='nome' type='text' value={name} onChange= {e => setName(e.target.value)} required/>
                <Inputs placeholder='foto'  value={image} onChange= {e => setImage(e.target.value)} required/>
                <Button type='submit'>Cadastrar</Button>
                <Link to='/'>
                    <Go>Já tem uma conta? Faça login!</Go>
                </Link>
            </Container>
        </form>    
    );
}