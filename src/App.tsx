import React from 'react';
import { BrowserRouter } from "react-router-dom";
import FormComponent from './pages/FormComponent';
import { AppRoutes } from './routes';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';



export const App: React.FC = () => {
  return(
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
