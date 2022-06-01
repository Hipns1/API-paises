//crear archivo de rutas

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "../Components/Home"
import NavBar from "../Components/NavBar";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;