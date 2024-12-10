import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const PaginaInicial: React.FC = () => {
  const navigate = useNavigate(); 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#257CFF",
          padding: 2,
          color: "white",
        }}
      >
        <Typography variant="h6" align="center">
          EDIL SYSTEM
        </Typography>
      </Box>

      {/* Box branco principal */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: 3,
          padding: 4,
          mt: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ mb: 4, fontWeight: "bold" }}>
          Bem-vindo, <span style={{ color: "#257cff" }}>USUÁRIO</span>
        </Typography>

        {/* Card "Clientes Cadastrados" Centralizado */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centraliza horizontalmente
            alignItems: "center", // Centraliza verticalmente
            height: "150px", // Espaço específico reservado para centralização
          }}
        >
          <Box
            sx={{
              width: "200px",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 2,
              textAlign: "center",
            }}
          >
            {/* Cabeçalho cinza */}
            <Box
              sx={{
                backgroundColor: "#757575",
                padding: "8px 0",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                CLIENTES CADASTRADOS
              </Typography>
            </Box>

            {/* Valor */}
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "16px 0",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#4caf50", // Verde
                  fontWeight: "bold",
                }}
              >
                0
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Botão "Cadastrar Novo Cliente" */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 6,
          }}
        >
          <Button onClick={() => navigate("/cadastrar")} variant="contained" color="success">
            CADASTRAR NOVO CLIENTE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PaginaInicial;
