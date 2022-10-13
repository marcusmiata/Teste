import styled from "styled-components";


const Scroll = styled.div`

    @media (max-width: 400px) {
        width: 400px;
        height: 580px;
        position: absolute;
        top: 300px;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
    }

    @media(min-width: 410px){
        position: relative;
        width: 1366px;
        height: 480px;
        top: 880px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    
`

const Elipse = styled.div`

    @media(max-width: 400px){
        width: 400px;
        height: 1000px;
        overflow: hidden;
        position: absolute;
    }

    @media(min-width: 410px){
        width: 1366px;
        height: 900px;
        overflow: hidden;
        position: absolute;
    }
    
`
const Botao = styled.button`

    @media(min-width: 410px){
        background-color: #E5E5E5;
        box-sizing: border-box;
        &:hover{
            border: 1px solid black;
        } 
    }
    @media(max-width:400px){
        display: none;
    }
`

const Parte = styled.span`

    @media(min-width: 400px){
        width: 91px;
        height: 4px;
        background-color: #1D2527;
        position: absolute;
        top:1400px;
        margin-left: 546px;
        &#parte2{
            margin-left: 637px;
            background-color: #D2D4D9;
        }
        &#parte3{
            margin-left: 728px;
            background-color: #D2D4D9;
        }  
    }
    
`

export{
    Scroll,
    Elipse,
    Botao,
    Parte,
};