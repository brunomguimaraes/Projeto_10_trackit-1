import styled from "styled-components";

const Title = styled.div ` 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    
    h1 {
        color: #126BA5;
        font-size: 24px;
        margin-left: 17px;
        font-family: 'Lexend Deca';
    }

`
const Button = styled.button`
    width: 40px;
    height: 35px;
    border-radius: 5px;
    background-color: #52B6FF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: #FFFFFF;
    margin-right: 17px;
    border: none;
`
const Notification = styled.div`
    width: 91%;
    word-wrap: break-word;
    margin-top: 28px;

    span {
        font-size: 18px;
        font-family: 'Lexend Deca';
        color: #666666;
    }
`


export {
    Title,
    Button,
    Notification
}
