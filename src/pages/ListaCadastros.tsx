import React, { useEffect, useState } from "react";
import { Box, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DadosCliente } from "../types/DadosClienteType";
import { useNavigate } from "react-router-dom";

const ListaCad: React.FC = () => {
  const navigate = useNavigate();
  const [clientes, setClientes] = useState<DadosCliente[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const buscarListaClientes = () => {
    const storedData = localStorage.getItem("clientes");
    if (storedData) {
      setClientes(JSON.parse(storedData));
    }
  };

  useEffect(() => {
    buscarListaClientes();
  }, []);

  const handleEdit = (cliente: DadosCliente) => {
    navigate('/cadastrar', { state: cliente });
  };

  const handleDelete = (id: number) => {
    const updatedClientes = clientes.filter((cliente) => cliente.id !== id);
    setClientes(updatedClientes);
    localStorage.setItem("clientes", JSON.stringify(updatedClientes));
  };

  const filteredClientes = clientes.filter(cliente =>
    cliente.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Nome</strong>
                </TableCell>
                <TableCell>
                  <strong>Email</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Ações</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredClientes.map((cliente) => (
                <TableRow key={cliente.id}>
                  <TableCell>{cliente.name}</TableCell>
                  <TableCell>{cliente.email}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleEdit(cliente)} color="primary">
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
