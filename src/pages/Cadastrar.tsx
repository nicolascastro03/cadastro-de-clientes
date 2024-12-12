import React, { useState } from 'react'; 
import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';
import { cpfValido } from '../components/ValidaCpf';

interface DadosCliente {
  name: string;
  email: string;
  dataNascimento: string;
  cpf: string;
  telefone: string;
}

const Cadastrar: React.FC = () => {
  const [dadosCliente, setDadosCliente] = useState<DadosCliente>({
    name: '',
    email: '',
    dataNascimento: '',
    cpf:'',
    telefone: '',
  });

  const[cpfError, setCpfError] = useState<string | null>(null);
  const [successAlert, setSuccessAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDadosCliente({
      ...dadosCliente,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!cpfValido(dadosCliente.cpf)){
      setCpfError('CPF Inválido');
      return;
    }
    setCpfError(null);
    console.log('Dados enviados:', dadosCliente);
    setSuccessAlert(true);
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
        onChange={handleChange}
        required
        fullWidth
      />

      <TextField
        label="CPF"
        variant="outlined"
        name="cpf"
        value={dadosCliente.cpf}
        onChange={handleChange}
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
        onChange={handleChange}
        required
        fullWidth
      />

      <TextField
        label="Data de nascimento"
        variant="outlined"
        name="Data de nascimento"
        type="date"
        value={dadosCliente.dataNascimento}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Telefone"
        variant="outlined"
        name="=telefone"
        type="string"
        value={dadosCliente.telefone}
        onChange={handleChange}
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar
      </Button>
      </Box>
    </Box>
  
      <Snackbar
        open={successAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%'}}>
          Dados enviados com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Cadastrar;