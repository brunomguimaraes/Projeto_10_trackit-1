import styled from "styled-components";
import Logoimg from '../../assets/css/img/TrackIt.png'
import UserContext from "../Contexts/UserContext";
import { useContext } from "react";

export default function TopBar() {
    const user = useContext (UserContext);
    return(
        <Top>
            <Logo src={Logoimg}/>
            <UserImg aqui vai ficar a imgem do usuario/>
        </Top>
    );
}

const Top = styled.div `
    position: fixed;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
const Logo = styled.img `
    width: 90px;
    height: 30px;
    margin: 10px 15px;
`
const UserImg = styled.img `
    width: 51px;
    height: 51px;
    border-radius: 50%;
    margin: 10px 18px;
`