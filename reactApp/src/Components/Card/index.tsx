import {Container, ContainerDados, Imagem, Texto, Titulo, ContainerTexto, Botao} from "./style";
import React, { ReactElement } from "react";
import { Icon } from '@iconify/react';

interface Props{
    ano:string;
    velo:string;
    raio:string;
    pessoas:string;
    imagem:string;

};

const Card: React.FC <Props> = ({ano, velo, raio, pessoas, imagem}) => {


    return (
        <Container>
            <ContainerDados>
                <Titulo>Mustang</Titulo>
                <ContainerTexto>
                    <Icon icon="bi:calendar2-date" style={{fontSize:'24px'}}/>
                    <Texto>{ano}</Texto>
                </ContainerTexto>
                <ContainerTexto>
                    <Icon icon="fluent:top-speed-24-filled" style={{fontSize:'24px'}}/>
                    <Texto>{velo} Km/h</Texto>
                </ContainerTexto>
                <ContainerTexto>
                    <Icon icon="simple-line-icons:energy" style={{fontSize:'24px'}}/>
                    <Texto>{raio}</Texto>
                </ContainerTexto>
                <ContainerTexto>
                    <Icon icon="fluent:people-20-regular" style={{fontSize:'24px'}}/>
                    <Texto>{pessoas}</Texto>
                </ContainerTexto>
                <Botao>Ver carro</Botao>
            </ContainerDados>
            
            <Imagem 
            src={imagem}
            alt="Mustang" 
            />
        </Container>
    );
};

export { Card };