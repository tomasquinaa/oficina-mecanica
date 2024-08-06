import { ReactNode } from "react"
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"

type typeData = {
    children: ReactNode
}

export const Layout = ({ children }: typeData) => {
    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    )
}