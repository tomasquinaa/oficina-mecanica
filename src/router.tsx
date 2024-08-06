import { Route, Routes } from "react-router-dom"
import { About } from "./Pages/About/AboutUs"
import { routes } from "./utils/menu"
import { Dashboard } from "./Pages/Dashboard/Dashboard"
import { Servicos } from "./Pages/Servicos/Servicos"
import { Contat } from "./Pages/Contat/Contat"


export const RouteComponent = () => {
    return (
        <>
            <Routes>
                <Route path={routes.MENU_HOME} element={<Dashboard/>} />
                <Route path={routes.MENU_ABOUT} element={<About/>} />
                <Route path={routes.MENU_SERVICOS} element={<Servicos/>} />
                <Route path={routes.MENU_CONTACT} element={<Contat/>} />
            </Routes>
        </>
    )
}