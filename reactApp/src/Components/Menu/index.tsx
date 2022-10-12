import React from "react";
import {Container, Logo, Texto, Opcoes} from "./style"
import { Icon } from "@iconify/react";

const Menu: React.FC = () => {

    return (
        <Container>
            <Opcoes>
                <li>
                    <Logo
                    src="src/assets/Vector.png"
                    alt="Logo"
                    />
                </li>
                <li>
                    <Texto>Home</Texto>
                </li>
                <li>
                    <Texto>Sobre</Texto>
                </li>
                <li>
                    <Texto>Fale Conosco</Texto>
                </li>
                <li>
                    <Texto>Tabela</Texto>
                </li>
                <li>
                    <Texto>Entrar</Texto>
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