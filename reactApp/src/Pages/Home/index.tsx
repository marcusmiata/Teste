import { Card } from "../../Components/Card";
import { Menu } from "../../Components/Menu";
import { Descricao } from "../../Components/Descricao";
import { Header } from "../../Components/Header"
import { Scroll, Elipse, Botao, Parte} from "./style"
import { Icon } from "@iconify/react"; 



const Home: React.FC = () => {   

    return (
        <>
            <Elipse>
                <Menu/>
                <Header/>
            </Elipse>
                <Scroll>
                    <Botao disabled id="esquerda">
                        <Icon icon="akar-icons:chevron-left" style={{
                            fontSize:'32.5px',
                        }}/>
                    </Botao>
                    <Card ano="2015" velo="180" raio="9/10" pessoas="8/10" imagem="src/assets/image 11.png"/>
                    <Card ano="2015" velo="180" raio="9/10" pessoas="8/10" imagem="src/assets/image 15.png"/>
                    <Card ano="2015" velo="180" raio="9/10" pessoas="8/10" imagem="src/assets/image 16.png"/>
                    <Botao id="direita">
                    <Icon icon="akar-icons:chevron-right" style={{
                            fontSize:'32.5px',
                        }}/>
                    </Botao>
                </Scroll>
                
                <Parte id="parte1"></Parte>
                <Parte id="parte2"></Parte>
                <Parte id="parte3"></Parte>
                
                <Descricao/>
        </>
        
    );
};


export { Home };