import { Container } from './shared-Login&Registration/components';
import TopBar from './shared-Habits/TopBar';
import Menu from './shared-Habits/MenuBottom';
import { Title, Button, Notification} from './shared-Habits/components'
import { useHistory } from 'react-router-dom';

function Habits() {
    const history = useHistory();

    function Create() {
        console.log(history)
        history.push('/CriarHabitos')
    }

    return(
        <Container background = '#F2F2F2'>
            <TopBar/>
            <Title>
                <h1>Meus Hábitos</h1>
                <Button onClick={Create}>+</Button>
            </Title>
            <Notification>
                <span>Você não tem nenhum hábito <br/> 
                cadastrado ainda. Adicione um hábito <br/>
                para começar a trackear!</span>
            </Notification>
            <Menu/>
        </Container>
    );
}

export default Habits;