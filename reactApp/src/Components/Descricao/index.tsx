import { Container, Texto, Wrapper, Titulo, Botao } from "./style";
import React from "react";

const Descricao: React.FC = () => {
    return(
        <Container>
            <Wrapper>
                <Titulo id="mobile">
                    O que são?
                </Titulo>
                <Titulo id="desktop">
                    Mustang
                </Titulo>
                <Texto id="desk">
                    O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.
                </Texto>
                <Texto id="mob">
                    A sigla SUV significa Sport Utility Vehicle -- ou seja, veículo utilitário esportivo. As SUVs costumam ter porte avantajado, além de interior espaçoso e possibilidade de trafegar dentro e fora da cidade.
                </Texto>
                <Botao>Ver carros</Botao>
            </Wrapper>
            
        </Container>     
    );
};

export { Descricao };