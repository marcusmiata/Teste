import styled from "styled-components";

const Container = styled.nav`

    @media(max-width:400px){
        width: 100%;
        height: 300px;
    }

    @media(min-width: 410px){
        width: 100%;
        height: 90px;
    }
    
`
const Opcoes = styled.ul`

    @media (max-width:400px) {
        position: relative;
        width: 70%;
        height: 810px;
        border-radius: 0px 24px 24px 0px;
        background-color: #FFFFFF;
        z-index: 15;
        display: none; //flex para aparecer
        flex-direction: column;
        list-style-type: none;
        top: -20px;
    }

    @media(min-width: 410px){
        display: flex;
        list-style-type: none;
    }
    
`

const Logo = styled.img`

    @media(max-width: 400px){
        position: absolute;
        margin: 28.5px 0px 0px 23.5px;
        width: 33px;
        &#desktop{
            position: relative;
            background-color: black;
            width: 48px;
            margin-bottom: 48px;
        }
        
    }
    
    @media(min-width: 410px){
        margin: 24.12px 45.12px 0px 32.12px;
        &#mobile{ 
            display: none;
        }
    }
    
    
`

const Texto = styled.p`

    @media(max-width:400px)
    {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 20px;
        padding: 10px 0px 32px 22px;
        display: flex;
        color: black;
        line-height: 150%;

        &#f{
            position: relative;
            top: -72px;
        }

        &#s{
            position: relative;
            top: 72px;
        
        }

        &#e{
            display: none;
        }
    }
    @media(min-width: 410px)
        {font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 20px;
        padding: 10px 22px;
        display: flex;
        color: white;
        margin: 27px 0px 0px 96px;
        &:hover{
            text-decoration: underline;
        }
    }
    
`

const Botao = styled.button`
    background: none;
    
`
export{
    Container,
    Logo,
    Texto,
    Opcoes,
    Botao
};