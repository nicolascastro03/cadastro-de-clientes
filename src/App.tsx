import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Cadastrar from './pages/Cadastrar';
import { AppRoutes } from './routes';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';
import Navegacao from './components/Navegacao';



export const App: React.FC = () => {
  return(
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <AppRoutes />
        <Navegacao />
      </BrowserRouter>
    </ThemeProvider>
  );
};
