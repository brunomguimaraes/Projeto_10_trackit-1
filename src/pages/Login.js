import Logoimg from '../assets/css/img/Logo.png'
import { Link } from "react-router-dom";
import { Inputs, Logo, Button, Go, Container} from "./shared-Login&Registration/components";

export default function Login () {
    return (
        <Container>
            <Logo src={Logoimg}/>
            <Inputs placeholder='email' type='email'/>
            <Inputs placeholder='senha' type='password'/>
            <Button>Entrar</Button>
            <Link to='/cadastro'>
                <Go>Não tem uma conta? Cadastre-se!</Go>
            </Link>
        </Container>
    );
}