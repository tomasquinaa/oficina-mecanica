import Slider from 'react-slick';
import { FaRegClock, FaSyncAlt, FaWrench } from 'react-icons/fa';
import { settings } from '../../utils/exportImg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Layout } from '../../Layout/Layout';
import { Banner } from '../../components/Banner/Banner';


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
      <Layout>
        
            <main>
            <Banner/>
                <section className="title-home text-center p-5 bg-gray-200">
                    <h3>
                        <small className="text-xl text-red-600">Seja bem vindo !</small>
                    </h3>
                    <h2 className="text-2xl my-2">Fique à vontade para conhecer mais sobre a oficina & Laboratório DIESEL</h2>
                    <p className="text-lg my-2 mb-5">
                        A oficina & Laboratório DIESEL executa serviços de manutenção corretiva e preventiva para veículos utilitários de todas as marcas.
                    </p>

                    <button className="btn-saiba inline-block px-5 py-2 bg-red-600 text-white rounded transition duration-300 hover:bg-red-800">
                        <a href="#">Conheça mais</a>
                    </button>
                </section>

                <section className="sobre-servicos p-10 bg-gray-100">
                    <h2 className="text-center mb-5">Conheça Alguns dos Nossos Serviços:</h2>
                    <p className="text-center mb-7">
                        Traga o seu veículo para fazer uma revisão completa com nossos especialistas. Atendemos veículos de todas as marcas e modelos, nacionais e importados.
                    </p>

                    <ul className="servicos flex justify-around flex-wrap">
                        <li className="list-none text-center flex-1 max-w-sm m-5 p-5 bg-white rounded shadow">
                        <FaRegClock className="mx-auto" />
                        <h2 className="mt-2 text-red-600 text-lg">Manutenção</h2>
                        <p className="servicos-descricao text-base mt-2 text-gray-600">Realize sua manutenção com horário marcado</p>
                        </li>

                        <li className="list-none text-center flex-1 max-w-sm m-5 p-5 bg-white rounded shadow">
                        <FaWrench className="mx-auto" />
                        <h2 className="mt-2 text-red-600 text-lg">Socorro Mecânico</h2>
                        <p className="servicos-descricao text-base mt-2 text-gray-600">Nosso mecânico vai até você para avaliar o problema.</p>
                        </li>

                        <li className="list-none text-center flex-1 max-w-sm m-5 p-5 bg-white rounded shadow">
                        <FaSyncAlt className="mx-auto" />
                        <h2 className="mt-2 text-red-600 text-lg">Serviço de Leva e Traz</h2>
                        <p className="servicos-descricao text-base mt-2 text-gray-600">Oferecemos serviço de leva e traz agendado e gratuito.</p>
                        </li>
                    </ul>
                </section>

                <div>
                <h2 className="title text-center mb-5">Conheça Algumas marcas que trabalhamos :</h2>
                </div>

                <section className="slider p-2">
                    <Slider {...sliderSettings}>
                        <div className="flex justify-center items-center">
                            <img src={settings.chery} alt="chery" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.chevrolet} alt="chevrolet" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.citroen} alt="citroen" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.fiat} alt="fiat" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.ford} alt="ford" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.hyunday} alt="hyunday" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.jac} alt="jac" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.jeep} alt="jeep" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.kia} alt="kia" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.landrover} alt="landrover" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.mercedes} alt="mercedes" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.mitsubishi} alt="mitsubishi" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.nissan} alt="nissan" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.peugeot} alt="peugeot" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.renault} alt="renault" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.suzuki} alt="suzuki" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.toyota} alt="toyota" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.volvo} alt="volvo" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={settings.vw} alt="Volkswagen" className="w-32 h-32 object-contain" />
                        </div>
                    </Slider>
                </section>
            </main>
      </Layout>
    </>
  );
};
