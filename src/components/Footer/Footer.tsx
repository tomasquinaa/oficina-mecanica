import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { cartVisa } from "../../utils/exportImg";
import "./style.css"

export const Footer = () => {
  return (
    <>
      <footer className="rodape">
        {/* Localização da empresa */}

        <ul className="localizacao">
          <li>
            <i className="fa fa-home" aria-hidden="true">
              <span>Rua Georgina Perreira da Silva,315-Franco da Rocha/SP</span>
            </i>
          </li>
          <li>
            <i className="fa fa-envelope" aria-hidden="true">
              <span>oficinaoffroadgarage@gmail.com</span>
            </i>
          </li>
          <li>
            <i className="fab fa-whatsapp" aria-hidden="true">
              <span>(11) 97368-7312</span>
            </i>
          </li>
        </ul>

        {/* Redes Sociais */}

        <ul className="redes-sociais">
          <li>
            <a href="https://www.facebook.com/oficinaoffroadgarage/?modal=admin_todo_tour">
            <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/oficinaoffroad/?hl=pt-br">
                <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC2yduuGFnH--4ajjdDb2VxQ/featured">
                <FaYoutube />
            </a>
          </li>
        </ul>

        {/* menu do rodapé */}
        <nav className="menu-rodape">
          <ul>
            <li>
              <a href="home.html">Home</a>
            </li>
            <li>
              <a href="quem-somos.html">Quem Somos</a>
            </li>
            <li>
              <a href="servico.html">Serviços</a>
            </li>
            <li>
              <a href="contato.html">Contato</a>
            </li>
          </ul>
        </nav>

        <img className="cartao-aceitos" src={cartVisa.cartao} alt="" />

        <p className="copyright">
          &copy; Copyright 2019 - Todos direitos reservados
        </p>
      </footer>
    </>
  );
};
