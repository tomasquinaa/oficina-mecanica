import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
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
              <span>Rua Gago Coutinho, 50 Bairro Samba</span>
            </i>
          </li>
          <li>
            <i className="fa fa-envelope" aria-hidden="true">
              <span>badieselluanda@hotmail.com</span> <br />
              <span>humbertoadao@hotmail.com</span>
            </i>
          </li>
        
          <li className="flex items-center space-x-2">
              <FaWhatsapp className="text-xl bg-green-400" />
              <span>(+244) 925 582 203 / 916 073 945</span>
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Quem Somos</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Contato</a>
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
