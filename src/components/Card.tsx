import '../styles/components/Card.css';

interface ProjetoCardProps {
  imagem: string;
  titulo: string;
  tecnologias: string;
  descricao: string;
  github: string;
}

const ProjetoCard = ({ imagem, titulo, tecnologias, descricao, github}: ProjetoCardProps) => {
  return (
    <div className="projeto-card">
      <img src={imagem} alt={titulo} className="projeto-img" />
      <div className="projeto-content">
        <h2 className="projeto-titulo">{titulo}</h2>
        <span className="projeto-tecnologias">{tecnologias}</span>
        <p className="projeto-descricao">{descricao}</p>
        <div className="projeto-botao">
          {github && <a href={github} target="_blank" rel="noopener noreferrer" className="projeto-btn">Github</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjetoCard;
