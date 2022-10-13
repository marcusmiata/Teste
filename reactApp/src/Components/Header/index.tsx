import { Container, Titulo, Imagem } from "./style";
import React from "react";

const Header: React.FC = () => {
   
    return (
        <>
            <Container>
                <Imagem
                src="src/assets/luca-david-HjXbVnnITvE-unsplash 1.png"
                />
            </Container>
            <Titulo>Mustang</Titulo>
        </>
    );
};


export { Header };