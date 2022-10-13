import {Container, ContainerDados, Imagem, Texto, Titulo, ContainerTexto, Botao} from "./style";
import React from "react";
import { Icon } from '@iconify/react';

const Card: React.FC = () => {

    return (
        <Container>
            <ContainerDados>
                <Titulo>Mustang</Titulo>
                <ContainerTexto>
                    <Icon icon="bi:calendar2-date" style={{fontSize:'24px'}}/>
                    <Texto>2015</Texto>
                </ContainerTexto>
                <ContainerTexto>
                    <Icon icon="fluent:top-speed-24-filled" style={{fontSize:'24px'}}/>
                    <Texto>180 Km/h</Texto>
                </ContainerTexto>
                <ContainerTexto>
                    <Icon icon="simple-line-icons:energy" style={{fontSize:'24px'}}/>
                    <Texto>9/10</Texto>
                </ContainerTexto>
                <ContainerTexto>
                    <Icon icon="fluent:people-20-regular" style={{fontSize:'24px'}}/>
                    <Texto>8/10</Texto>
                </ContainerTexto>
                <Botao>Ver carro</Botao>
            </ContainerDados>
            <Imagem 
            src="src/assets/image 11.png" 
            alt="Mustang" 
            />
        </Container>
    );
};

export { Card };