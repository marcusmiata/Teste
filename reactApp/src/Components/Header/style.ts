import styled from "styled-components";

const Container = styled.div`
    @media(max-width:400px){
        width: 880px;
        height: 276px;
        position: absolute;
        top: 0px;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        right: -200px;
        z-index: -10;
        display: flex;
        overflow: hidden;
        background-color: red;
    }

    @media(min-width: 410px){
        width: 2462px;
        height: 890px;
        position: absolute;
        top: -100px;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        right: -550px;
        z-index: -10;
        display: flex;
        overflow: hidden;
    }
    
`

const Titulo = styled.h1`
    @media(max-width:400px){
        color: #EBEBEB;
        font-family: 'BebasKaiRegular', sans-serif;
        font-size: 59.9658px;;
        line-height: 305.94px;
        margin: 113.81px 0px 0px 381px;
        letter-spacing: 0.12em;
        position: absolute;
        right: 75px;
        top: -170px;
    }

    @media(min-width: 410px){
        color: #EBEBEB;
        font-family: 'BebasKaiRegular', sans-serif;
        font-size: 203.959px;
        line-height: 305.94px;
        margin: 113.81px 0px 0px 381px;
        letter-spacing: 0.12em;
        position: absolute;
        right: 280px;
        top: 78px;
        margin-top: 10px;  
    }
    
`
const Imagem = styled.img`

    @media(max-width:400px){
        display: flex;
        width: 426px;
        height: 320px;
        position: absolute;
        margin-left: 260px;
        top: -30px; 
    }

    @media(min-width: 410px){
        display: flex;
        width: 1492px;
        height: 890px;
        position: absolute;
        margin-left: 450px;
        top: 0px; 
    }
    
`

export{
    Container,
    Titulo,
    Imagem
};