import { ReactNode } from "react"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

type typeData = {
    children: ReactNode
}

export const Layout = ({ children }: typeData) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}