import { Route, Routes } from "react-router-dom"
import { About } from "./Pages/About/AboutUs"
import { routes } from "./utils/menu"
import { Dashboard } from "./components/Dashboard/Dashboard"



export const RouteComponent = () => {
    return (
        <>
            <Routes>
                    <Route path={routes.MENU_HOME} element={<Dashboard/>} />
                    <Route path={routes.MENU_ABOUT} element={<About/>} />
            </Routes>
        </>
    )
}