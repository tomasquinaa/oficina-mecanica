import Slider from 'react-slick';
import { FaRegClock, FaSyncAlt, FaWrench } from 'react-icons/fa';
import { settings } from '../../utils/exportImg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Dashboard = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <main>
        <section className="title-home">
          <h3>
            <small>Seja bem vindo !</small>
          </h3>
          <h2>
            Fique à vontade para conhecer mais sobre a oficina Off Road Garage
          </h2>
          <p>
            A oficina Off Road Garage executa serviços de manutenção corretiva e
            preventiva para veículos utilitários de todas as marcas, nacionais e
            importados.
          </p>

          <button className="btn-saiba">
            <a href="servicos.html">Conheça mais</a>
          </button>
        </section>

        <section className="sobre-servicos">
          <h2>Conheça Alguns dos Nossos Serviços:</h2>
          <p>
            Traga o seu veículo para fazer uma revisão completa com nossos
            especialistas. Atendemos veículos de todas as marcas e modelos,
            nacionais e importados.
          </p>

          <ul className="servicos">
            <li>
              <FaRegClock className="" />
              <h2>Manutenção</h2>
              <p className="servicos-descricao">
                Realize sua manutenção com horário marcado
              </p>
            </li>

            <li>
              <FaWrench />
              <h2>Socorro Mecânico</h2>
              <p className="servicos-descricao">
                Nosso mecânico vai até você para avaliar o problema.
              </p>
            </li>

            <li>
              <FaSyncAlt />
              <h2>Serviço de Leva e Traz</h2>
              <p className="servicos-descricao">
                Oferecemos serviço de leva e traz agendado e gratuito.
              </p>
            </li>
          </ul>
        </section>

        <div>
          <h2 className="title">Conheça Algumas marcas que trabalhamos :</h2>
        </div>

        <section className="slider">
          <Slider {...sliderSettings}>
            <div>
              <img src={settings.chery} alt="chery" />
            </div>
            <div>
              <img src={settings.chevrolet} alt="chevrolet" />
            </div>
            <div>
              <img src={settings.citroen} alt="citroen" />
            </div>
            <div>
              <img src={settings.fiat} alt="fiat" />
            </div>
            <div>
              <img src={settings.ford} alt="ford" />
            </div>
            <div>
              <img src={settings.hyunday} alt="hyunday" />
            </div>
            <div>
              <img src={settings.jac} alt="jac" />
            </div>
            <div>
              <img src={settings.jeep} alt="jeep" />
            </div>
            <div>
              <img src={settings.kia} alt="kia" />
            </div>
            <div>
              <img src={settings.landrover} alt="landrover" />
            </div>
            <div>
              <img src={settings.mercedes} alt="mercedes" />
            </div>
            <div>
              <img src={settings.mitsubishi} alt="mitsubishi" />
            </div>
            <div>
              <img src={settings.nissan} alt="nissan" />
            </div>
            <div>
              <img src={settings.peugeot} alt="peugeot" />
            </div>
            <div>
              <img src={settings.renault} alt="renault" />
            </div>
            <div>
              <img src={settings.suzuki} alt="suzuki" />
            </div>
            <div>
              <img src={settings.toyota} alt="toyota" />
            </div>
            <div>
              <img src={settings.volvo} alt="volvo" />
            </div>
            <div>
              <img src={settings.vw} alt="Volkswagen" />
            </div>
          </Slider>
        </section>
      </main>
    </>
  );
};
