import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';
import { cpfValido } from '../components/ValidaCpf';
import { DadosCliente } from '../types/DadosClienteType';
import { useLocation } from 'react-router-dom';

const Cadastrar: React.FC = () => {
  const location = useLocation();
  const clienteParaEditar = location.state as DadosCliente;
  
  const [dadosCliente, setDadosCliente] = useState<DadosCliente>({
    id: 0,
    name: '',
    email: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
  });

  const [cpfError, setCpfError] = useState<string | null>(null);
  const [successAlert, setSuccessAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cpfValido(dadosCliente.cpf)) {
      setCpfError('CPF Inválido');
      return;
    }
    setCpfError(null);
    const storedData = localStorage.getItem("clientes");
    const clientes: DadosCliente[] = storedData ? JSON.parse(storedData) : [];
  
    if (dadosCliente.id) {
      const clientesAtualizados = clientes.map((c) =>
        c.id === dadosCliente.id ? dadosCliente : c
      );
      localStorage.setItem("clientes", JSON.stringify(clientesAtualizados));
    } else {
  
      const novoId = clientes.length > 0 ? Math.max(...clientes.map((c) => c.id)) + 1 : 1;
      const clienteComId = { ...dadosCliente, id: novoId };
      const novosClientes = [...clientes, clienteComId];
      localStorage.setItem("clientes", JSON.stringify(novosClientes));
    }
  
    setSuccessAlert(true);
  
    setDadosCliente({
      id: 0,
      name: '',
      email: '',
      dataNascimento: '',
      cpf: '',
      telefone: '',
    });
  };
  const handleCloseAlert = () => {
    setSuccessAlert(false);
  }

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
          Cadastrar novo cliente
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >

          <TextField
            label="Nome"
            variant="outlined"
            name="name"
            value={dadosCliente.name}
            onChange={(e) => {
              setDadosCliente({ ...dadosCliente, name: e.target.value })
            }}
            required
            fullWidth
          />

          <TextField
            label="CPF"
            variant="outlined"
            name="cpf"
            value={dadosCliente.cpf}
            onChange={(e) => {
              setDadosCliente({ ...dadosCliente, cpf: e.target.value })
            }}
            required
            fullWidth
            error={!!cpfError}
            helperText={cpfError}
          />

          <TextField
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            value={dadosCliente.email}
            onChange={(e) => {
              setDadosCliente({ ...dadosCliente, email: e.target.value })
            }}
            required
            fullWidth
          />
       
          <TextField
            label="Data de nascimento"
            variant="outlined"
            name="dataNascimento"
            value={dadosCliente.dataNascimento}
            onChange={(e) => setDadosCliente({ ...dadosCliente, dataNascimento: e.target.value })}
            fullWidth
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />



          <TextField
            label="Telefone"
            variant="outlined"
            name="telefone"
            type="string"
            value={dadosCliente.telefone}
            onChange={(e) => {
              setDadosCliente({ ...dadosCliente, telefone: e.target.value })
            }}
            fullWidth
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Cadastrar
          </Button>
        </Box>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={successAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Dados enviados com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Cadastrar;