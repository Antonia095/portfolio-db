import '../styles/components/Habilidades.css';

const habilidades = [
  {
    categoria: 'Back end',
    itens: [
      { nome: 'JAVA', nivel: 4 },
      { nome: 'SPRING BOOT', nivel: 4 },
      { nome: 'JUNIT', nivel: 4 },
      { nome: 'DOCKER', nivel: 3 },
      { nome: 'POSTGRES SQL', nivel: 4 },
      { nome: 'MONGODB', nivel: 3 },
      { nome: 'SWAGGER', nivel: 4 },
    ],
  },
  {
    categoria: 'Front end',
    itens: [
      { nome: 'HTML', nivel: 4 },
      { nome: 'CSS', nivel: 3 },
      { nome: 'JAVA SCRIPT', nivel: 3 },
      { nome: 'REACT', nivel: 3 },
    ],
  },
];

const maxCirculos = 5;

const Habilidades = () => {
  
  return (
    <div className="habilidades-container">
      <h2>Habilidades</h2>
      {habilidades.map((tipo) => (
        <div key={tipo.categoria} className="habilidades-lista">
              <strong>{tipo.categoria}</strong>
              <div className="habilidades-itens">
                <ul>
                    {tipo.itens.map((item) => (
                    <li key={item.nome}>{item.nome}</li>
                    ))}
                </ul>
                <div>
                    {tipo.itens.map((item) => (
                      <div key={item.nome} className="habilidades-circulos">
                          {[...Array(maxCirculos)].map((_, i) => (
                          <span
                              key={i}
                              className={
                              i < item.nivel
                                  ? 'habilidade-circulo preenchido'
                                  : 'habilidade-circulo'
                              }
                          ></span>
                          ))}
                      </div>
                    ))}
                </div>
              </div>
        </div>
      ))}
    </div>
  );

};

export default Habilidades;
