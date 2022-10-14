import styled from "styled-components";

const Container = styled.div`

    @media(max-width:400px) {
        padding: 0;
        margin: 40px;
        width: 281px;
        height: 476px;  
    }    

    @media(min-width: 410px){
        padding: 0;
        margin:0;
        width: 281px;
        height: 476px; 
    }
    
`

const ContainerDados = styled.div`
    font-family: 'Montserrat', sans-serif;
    border: 1px solid #1D2527;
    width: 17.563rem;
    height: 22.625rem;
    position: absolute;
    bottom: 0px;
    border-radius: 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
`

const Imagem = styled.img`

    @media(max-width: 400px){
        position: relative;
        z-index: 10;
        top:50px;
        left: 10px;
        padding-bottom: 10px;
        height: 150px; 
    }
    
    @media(min-width: 410px){
        position: relative;
        z-index: 10;
        left: 10px;
        padding-bottom: 10px;
        height: 150px;    
    }
    
`

const Texto = styled.p`
    margin-left: 24px;
    position: relative;
    top: 5px;
`

const ContainerTexto = styled.div`
    display: flex;
    margin: 24px 0px 0px 32px;
`

const Titulo = styled.h1`
    font-size: 24px;  
    margin-top: 25px;
    margin-bottom: 16px;
`

const Botao = styled.button`
    font-family: 'Montserrat', sans-serif;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    width: 217px;
    height: 48px;
    align-self:center;
    border-radius: 21px;
    margin-top: 25px;
    border: 1px solid black;
    &:hover{
        border: 3px solid black;
    }
`

export{
    Container,
    ContainerDados,
    Imagem,
    Texto,
    Titulo,
    ContainerTexto,
    Botao
};