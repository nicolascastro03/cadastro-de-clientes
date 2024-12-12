import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FormComponent from '../pages/Cadastrar';
import PaginaInicial from '../pages/PaginaInicial';
import ListaCadastros from '../pages/ListaCadastros';

export const AppRoutes = () => {

    return(
        <Routes>
            <Route path = "/pagina-inicial" element={<PaginaInicial/> } />
            <Route path = "/cadastrar" element = {<FormComponent/>} />
            <Route path = "/lista-cadastros" element = {<ListaCadastros/>} />
            <Route path = "*" element = {<Navigate to = "/pagina-inicial" />} />
        </Routes>
    );
}