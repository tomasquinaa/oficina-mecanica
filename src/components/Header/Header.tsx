import { banners, logos } from '../../utils/exportImg'
import { routes } from '../../utils/menu'
//import './style.css'

export const Header = () => {
    return (
        <>
            <div>
                <h1 className="logo">
                    <img src={logos.logo} alt="Logo da Oficina Off Road Garage" />
                </h1>
            </div>

            {/* BOTÃO DO MENU */}
            <button className="btn-menu"><i className="fa fa-bars fa-lg"></i></button>
            
            <header className="cabecalho">
                {/* Menu */}
                <nav className="menu">
                        {/* BOTÃO DE FECHAR O MENU  */}
                        <span className="btn-close"><i className="fa fa-times"></i></span>
                        <ul>
                            <li><a href={routes.MENU_HOME}>Home</a></li>
                            <li><a href={routes.MENU_ABOUT}>Quem Somos</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>
            </header>

            <div className="cabecalho-banner">
                <img src={banners.banner} alt="Banner da oficina off road garage" />
            </div>
        </>
    )
}

