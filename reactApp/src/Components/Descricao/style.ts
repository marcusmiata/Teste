import styled from "styled-components";

const Container = styled.div`

    @media(max-width: 400px){
        font-family: 'Montserrat', sans-serif;
        background-image: url("src/assets/jon-flobrant-lRSChvh1Mhs-unsplash 2.png");
        width: 400px;
        height: 543px;
        position: absolute;
        left: 0px;
        top: 950px;
        background-size:100% 100%;
    }

    @media(min-width: 410px){
        font-family: 'Montserrat', sans-serif;
        background-image: url("src/assets/slade-lapusnak-z-3lZfFdsj0-unsplash 1.png");
        width: 1366px;
        height: 543px;
        position: absolute;
        top: 1500px;   
    }   
`

const Texto = styled.p`

    @media(max-width:400px){
        color: white;
        font-size: 16px;
        font-weight: 300;
        line-height: 200%;
        text-align: right;
        padding-right: 10px;
        &#desk{
            display: none;
        }
    }

    @media(min-width: 410px){
        color: white;
        font-size: 20px;
        margin: 0px 157px 0px 0px;
        font-weight: 300;
        line-height: 200%;
        &#mob{
            display: none;
        }    
    }
    
`

const Wrapper = styled.div`

    @media(max-width:400px){
        background-image:linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.6));
        backdrop-filter: blur(10px);
        width: 100%;
        height: 60%;
        position: absolute;
        right: 0px;
        text-align: end; 
    }
    @media(min-width: 410px){
        background-image:linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.4));
        backdrop-filter: blur(5px);
        width: 773px;
        height: 100%;
        position: absolute;
        right: 0px;
        text-align: end;    
    }
    
`

const Titulo = styled.h1`

    @media(max-width:400px){
        color: white;
        margin: 32px 23px 7px 0px;
        &#desktop{
            display:none;
        }
    }

    @media(min-width: 410px){
        color: white;
        margin: 86px 157px 16px 0px;   
        &#mobile{
            display:none;
        }  
    }
    
`

const Botao = styled.button `

    @media(max-width:400px){
        font-family: 'Montserrat', sans-serif;
        background: none;
        width: 193px;
        height: 40px;
        color: white;
        border: 1px solid white;
        font-size: 16px;
        line-height: 32px;
        margin: 16px 35px 0px 0px;
        font-weight: 500;
    }

    @media(min-width: 410px){
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
    }
    
`

export{
    Container,
    Texto,
    Wrapper,
    Titulo,
    Botao
};