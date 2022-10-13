import React from "react";
import {Container, Logo, Texto, Opcoes, Botao} from "./style"
import { Icon } from "@iconify/react";

const Menu: React.FC = () => {

    function abrir(){
        const element = document.getElementById("menu");
        if(element !== null){
            element.style.display = "flex";
        }
    }

    function fechar(){
        const element = document.getElementById("menu");
        if(element!==null){
            element.style.display = "none";
        }
    }

    return (
        <Container>
            <Botao onClick={abrir}>
                <Logo id = "mobile"
                    src="src/assets/Vector2.png"
                    alt="logo mobile"
                />
            </Botao>
            
            <Opcoes id="menu">
                <li>
                    <Botao onClick={fechar}>
                        <Logo id = "desktop"
                        src="src/assets/Vector.png"
                        alt="Logo"
                        />
                    </Botao>
                </li>
                <li>
                    <Texto id="h">Home</Texto>
                </li>
                <li>
                    <Texto id="s">Sobre</Texto>
                </li>
                <li>
                    <Texto id="f">Fale Conosco</Texto>
                </li>
                <li>
                    <Texto id="t">Tabela</Texto>
                </li>
                <li>
                    <Texto id="e">Entrar</Texto>
                </li>
                <li>
                    <Icon icon="charm:person" style={{
                        color: 'white', 
                        fontSize: '20px', 
                        margin:'38px 0px 0px 15.12px'}}/>
                </li>   
            </Opcoes>
        </Container>
    );
};

export { Menu };