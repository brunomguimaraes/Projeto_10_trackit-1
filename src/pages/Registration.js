import Logoimg from '../assets/css/img/Logo.png'
import { Link } from "react-router-dom";
import { Inputs, Logo, Button, Go, Container} from "./shared-Login&Registration/components";

export default function Registration() {
    return(
        <Container>
            <Logo src={Logoimg}/>
            <Inputs placeholder='email' type='email'/>
            <Inputs placeholder='senha' type='password'/>
            <Inputs placeholder='nome' type='text'/>
            <Inputs placeholder='foto' type='url'/>
            <Button>Cadastrar</Button>
            <Link to='/'>
                <Go>Já tem uma conta? Faça login!</Go>
            </Link>
        </Container>
    );
}