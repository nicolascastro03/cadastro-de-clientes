import React from 'react';
import { Box, Typography } from '@mui/material';

const PaginaInicial: React.FC = () => {
  return (

    <Box
      sx={{
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', 
      }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: '#fff', 
          borderRadius: 8, 
          boxShadow: 3,
          height:'90%',
          width:'70%', 
        }}
      >
          <Typography
            variant="h4"
              sx={{ 
                color: '#6d6d6e', 
                position: 'absolute',
                top: 60,
               left: 250,
           }}
        >
          Seja Bem-Vindo,
          </Typography>
        </Box>
      </Box>
  );
};

export default PaginaInicial;
