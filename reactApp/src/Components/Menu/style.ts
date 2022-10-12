import styled from "styled-components";

const Container = styled.nav`
    background-color: black;
    width: 100%;
    height: 90px;
`
const Opcoes = styled.ul`
    display: flex;
    list-style-type: none;
`

const Logo = styled.img`
    margin: 24.12px 45.12px 0px 32.12px;
`

const Texto = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 20px;
    padding: 10px 22px;
    display: flex;
    color: white;
    margin: 27px 0px 0px 96px;
    &:hover{
        text-decoration: underline;
    }
`

export{
    Container,
    Logo,
    Texto,
    Opcoes
};