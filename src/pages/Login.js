import styled from "styled-components";
import Logoimg from '../assets/css/img/Logo.png'
import { Link } from "react-router-dom";

export default function Login () {
    return (
        <Container>
            <Logo src={Logoimg}/>
            <InputLogin placeholder='email' type='email'/>
            <InputLogin placeholder='senha' type='password'/>
            <Button>Entrar</Button>
            <Link>Aqui vai ficar o caminho pro cadrasto</Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction:column;
    align-items: center;
`
const Logo = styled.img `
    width: 180px;
    height: 180px;
    margin-top: 68px;
    margin-bottom: 32px;
`
const InputLogin = styled.input `
    width: 82%;
    height: 45px;
    padding-left: 11px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    outline: none;
    font-size: 20px;
    font-family: sans-serif;
    color: #666666;
    background-color: #FFFFFF;
    margin-bottom: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    ::placeholder {
        color: #DBDBDB;
    }
`
const Button = styled.button`
    width: 85%;
    height: 45px;
    margin-bottom: 25px;
    background-color: #52B6FF;
    color: #FFFFFF;
    border-radius: 5px;
    font-size: 20px;
    border: none;
`


