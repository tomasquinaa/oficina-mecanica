export const About = () => {
  return (
    <>
      <div className="cabecalho-servicos">
        <h2>Quem Somos</h2>
      </div>

      {/* conteúdo principal */}
      <main>
        <section>
          <div className="slider">
            <img className="nature" src="image/local-1.jpeg" />
            <img className="nature" src="image/local-2.jpeg" />
            <img className="nature" src="image/local-3.jpeg" />
          </div>

          <div className="sobre">
            <h3>
              <small>OFICINA MECÂNICA MULTIMARCAS</small>
            </h3>
            <p>
              A Oficina Off Road Garage é uma oficina localizada em Franco da
              Rocha, com mais de um ano de experiência em diagnostico e
              manutenção automotiva, de veiculos nacionais e
              importados.Oferecemos outros tipos de serviço para seu
              automóvel,sempre em busca de novas tecnologias para trazer
              soluções para seu veiculo e o compromisso com a qualidade e o
              melhor preço, faz a Oficina Off Road Garage uma oficina
              especialista em clientes satisfeito.
            </p>
            <p className="funcionamento">
              Funcionamento de Segunda a Sábado, das 8h às 18h.
            </p>
          </div>

          <div className="sobre-servicos">
            <h2>Conheça Alguns de Nossos Serviços :</h2>

            <ul className="servicos">
              <li>
                <img
                  className="image-servicos"
                  src="image/agile.jpg"
                  alt="imagem3"
                />
              </li>

              <li>
                <img
                  className="image-servicos"
                  src="image/bmw.jpg"
                  alt="imagem3"
                />
              </li>

              <li>
                <img
                  className="image-servicos"
                  src="image/cruze-.jpg"
                  alt="imagem3"
                />
              </li>

              <li>
                <img
                  className="image-servicos"
                  src="image/honda.jpg"
                  alt="imagem3"
                />
              </li>

              <li>
                <img
                  className="image-servicos"
                  src="image/punto.jpg"
                  alt="imagem3"
                />
              </li>

              <li>
                <img
                  className="image-servicos"
                  src="image/ecoport.jpg"
                  alt="imagem3"
                />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};
