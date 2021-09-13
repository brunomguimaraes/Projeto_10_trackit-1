import styled from "styled-components";

export default function Menu() {
    return (
        <Bottom>
            <Option>Hábitos</Option>
            <Progress>Hoje</Progress>
            <Option>Histórico</Option>
        </Bottom>
    );
}

const Bottom = styled.div ` 
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFFFF;
`
const Option = styled.span`
    color: #52B6FF;
    font-size: 18px;
    font-family: 'Lexend Deca';
`
const Progress = styled.div ` 
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background-color: #52B6FF;
    font-size: 18px;
    font-family: 'Lexend Deca';
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
    color: #FFFFFF;
`