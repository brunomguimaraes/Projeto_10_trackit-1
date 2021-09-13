import { Container } from './shared-Login&Registration/components';
import TopBar from './shared-Habits/TopBar';
import Menu from './shared-Habits/MenuBottom';
import { Title, Button, Notification} from './shared-Habits/components'
import styled from 'styled-components';
import { useState } from 'react';


export default function CreateHabits() {
    const Week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [day, setDay] = useState('');
    const [nameHabits, setNameHabists] = useState('');

    function ToSaveHabits(event) {
        event.preventDefault();
        const body = {
            nameHabits,
            day
        }
      
        console.log(body)
        console.log(day)
        
    }

    return(
        <Container>
            <TopBar/>
            <Title>
                <h1>Meus Hábitos</h1>
                <Button onClick={Create}>+</Button>
            </Title>

            <form onSubmit={ToSaveHabits}>
            <Create>
                 <NameHabit type='text' placeholder='nome do hábito' value={nameHabits} onChange={e => setNameHabists (e.target.value)} required/>
                 <Days>
                    { Week.map ( (day, index) => <button value={day} onClick={(e) => setDay(e.target.value)} key={index} > {day}</button>)}
                </Days>
                <Option>
                    <button>Cancelar</button>
                    <button type='submit'>Salvar</button>
                 </Option>
            </Create>
            </form>
            <Notification>
                <span>Você não tem nenhum hábito <br/> 
                cadastrado ainda. Adicione um hábito <br/>
                para começar a trackear!</span>
            </Notification>
            <Menu/>
        </Container>
    );
}

const Create = styled.div`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const NameHabit = styled.input `
    width: 380px;
    height: 45px;
    padding: 8px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    ::placeholder {
        color:#CFCFCF;
        font-family: 'Lexend Deca';
        font-size:18px;
    }
`

const Days = styled.div`
    width: 380px;
    display: flex;
    margin-top: 8px;

    button {
        width: 30px;
        height: 30px;
        margin-right: 4px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-size: 19px;
        font-family: 'Lexend Deca';
        background-color: #FFFFFF;
        color: #CFCFCF;
    }

`
const Option = styled.div ` 
    width: 380px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
    font-size: 16px;

    button {
        width: 84px;
        height: 35px;
        border-radius: 5px;
        margin-left: 4px;
        border: none;
        font-family: 'Lexend Deca';
        
        :nth-child(1) {
            background-color: #FFFFFF;
            color: #52B6FF;
        }

        :nth-child(2){
            background-color: #52B6FF;
            color: #FFFFFF;
        }
    }
`
