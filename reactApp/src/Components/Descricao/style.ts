import styled from "styled-components";

const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
    background-image: url("src/assets/slade-lapusnak-z-3lZfFdsj0-unsplash 1.png");
    width: 1366px;
    height: 543px;
    position: absolute;
`

const Texto = styled.p`
    color: white;
    font-size: 20px;
    margin: 0px 157px 0px 0px;
    font-weight: 300;
    line-height: 200%;
`

const Wrapper = styled.div`
    background-image:linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.4));
    backdrop-filter: blur(5px);
    width: 773px;
    height: 100%;
    position: absolute;
    right: 0px;
    text-align: end;
`

const Titulo = styled.h1`
    color: white;
    margin: 86px 157px 16px 0px;
`

const Botao = styled.button `
    font-family: 'Montserrat', sans-serif;
    background: none;
    width: 273px;
    height: 48px;
    color: white;
    border: 1px solid white;
    font-size: 16px;
    line-height: 32px;
    position: relative;
    margin: 32px 157px 0px 0px;
    &:hover{
        border: 3px solid white;
    }
`

export{
    Container,
    Texto,
    Wrapper,
    Titulo,
    Botao
};