import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PaginaInicial from '../pages/PaginaInicial';
import ListaCadastros from '../pages/ListaCadastros';
import Cadastrar from '../pages/Cadastrar';

export const AppRoutes = () => {

    return(
        <Routes>
            <Route path = "/pagina-inicial" element={<PaginaInicial/> } />
            <Route path = "/cadastrar" element = {<Cadastrar/>} />
            <Route path = "/lista-cadastros" element = {<ListaCadastros/>} />
            <Route path = "*" element = {<Navigate to = "/pagina-inicial" />} />
        </Routes>
    );
}