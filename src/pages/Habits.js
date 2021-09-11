import { Container } from './shared-Login&Registration/components';
import TopBar from './shared-Habits/TopBar';
import Menu from './shared-Habits/MenuBottom';

function Habits() {
    return(
        <Container>
            <TopBar/>
            <Menu/>
        </Container>
    );
}

export default Habits