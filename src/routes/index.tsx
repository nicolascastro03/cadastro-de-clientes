import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FormComponent from '../pages/FormComponent';
import PaginaInicial from '../pages/PaginaInicial';

export const AppRoutes = () => {

    return(
        <Routes>
            <Route path = "/pagina-inicial" element={<PaginaInicial/> } />
            <Route path = "/cadastrar" element = {<FormComponent/>} />
            <Route path = "*" element = {<Navigate to = "/pagina-inicial" />} />
        </Routes>
    );
}