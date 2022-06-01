//crear archivo de rutas

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Detail from "../Components/Detail";
import Home from "../Components/Home"
import NavBar from "../Components/NavBar";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path='*' element={<Navigate to='/' />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;