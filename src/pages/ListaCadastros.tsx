import React, { useState } from "react";
import { Box, TextField, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListaCad: React.FC = () => {
  const [clientes, setClientes] = useState([
    { id: 1, nome: "João Silva", email: "joao@gmail.com" },
    { id: 2, nome: "Maria Oliveira", email: "maria@gmail.com" },
    { id: 3, nome: "Carlos Souza", email: "carlos@gmail.com" },
  ]);

  const handleEdit = (id: number) => {
    alert(`Editar cliente com ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  };

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
      <Box
        sx={{
          position: "fixed",
          top: 0,
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

      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: 3,
          padding: 4,
          mt: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Lista de Clientes
        </Typography>

        <TextField
          label="Pesquisar"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Nome</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell align="right"><strong>Ações</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientes.map((cliente) => (
                <TableRow key={cliente.id}>
                  <TableCell>{cliente.nome}</TableCell>
                  <TableCell>{cliente.email}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleEdit(cliente.id)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(cliente.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ListaCad;
