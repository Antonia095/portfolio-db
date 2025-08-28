import '../styles/pages/Sobre.css';
import photo from '../assets/photo.jpg'
import Habilidades from '../components/Habilidades';

const Sobre = () => {
    return (
        <div className='flex-sobre'>
            <div className="container-sobre">
                <div className="initial-text">
                    <h2>Olá, meu nome é</h2>
                </div>

                <div className="name-text">
                    <h1>Antonia Maciel</h1>
                    <h2>Sou desenvolvedora de software junior na DBServer.</h2>
                </div>

                <div className="container-descricao">
                    <h2>Sobre mim</h2>
                    <p>Sou uma desenvolvedora de software junior, minha jornada no desenvolvimento de software
                        começou através do programa de estágio da DBServer o StarDB em 2021. Nas minhas vivências na área de TI
                        tiver a oportunidade de atuar com tecnologias como Java, Spring Boot, TypeScript. Sempre com a preocupação 
                        em aplicar no desenvolvimento o Clean Code e boas práticas de desenvolvimento para entrega de código 
                        com qualidade.  
                        </p>
                </div>
            </div>

            <div className='item-direita'>
                <div className='photo-container'>
                    <img
                        src={photo}
                        alt="Foto de Antonia Maciel"
                    />
                </div>
                <div className='habilidades-container'>
                    <Habilidades />
                </div>

            </div>
        </div>
    );
};

export default Sobre;
