import Card from '../components/Card';
import votacao from '../assets/votacao.png';
import pedidos from '../assets/pedidos.jpg';
import calculadora from '../assets/calculadora.jpg';
import '../styles/pages/Projetos.css';

const projetos = [
    {
        imagem: votacao,
        titulo: 'Desafio de Votação',
        tecnologias: 'JAVA, SPRING BOOT, DOCKER',
        descricao: 'Este projeto consiste em uma aplicação de votação online, onde os usuários podem cadastrar pautas e votar nelas.',
        github: 'https://github.com/Antonia095/desafio-votacao',
    },
    {
        imagem: pedidos,
        titulo: 'Projeto de Pedidos Online',
        tecnologias: 'JAVA, SPRING BOOT, KAFKA, DOCKER',
        descricao: 'Este projeto consiste em uma aplicação de pedidos online, e possue dois microsserviços Kafka, para registrar e processar pagamentos.',
        github: 'https://github.com/Antonia095/servico-pedidos-online',
    },
    {
        imagem: calculadora,
        titulo: 'API de Cálculo Matemático',
        tecnologias: 'JAVA, SPRING BOOT',
        descricao: 'Este projeto consiste em uma API de cálculo matemático, desenvolvida com JAVA e SPRING BOOT.',
        github: 'https://github.com/Antonia095/calculo-matematico-api',
    },
];

const Projetos = () => {

    return (
        <div className="projetos-page">
            <h2 className="projetos-titulo">Meus</h2> 
            <h1 className="projetos-subtitulo">Projetos</h1>
            
            <div className="projetos-lista">
                {projetos.map((projeto, index) => (
                    <Card key={index} {...projeto} />
                ))}
            </div>
        </div>
    );
};

export default Projetos;
