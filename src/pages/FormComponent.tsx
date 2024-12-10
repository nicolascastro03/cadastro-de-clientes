import React, { useState } from 'react'; 
import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';
import { cpfValido } from '../components/ValidaCpf';

interface FormData {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    cpf:'',
  });

  const[cpfError, setCpfError] = useState<string | null>(null);
  const [successAlert, setSuccessAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!cpfValido(formData.cpf)){
      setCpfError('CPF Inválido');
      return;
    }
    setCpfError(null);
    console.log('Dados enviados:', formData);
    setSuccessAlert(true);
  };

  const handleCloseAlert = () => {
    setSuccessAlert(false);
  }

  return (
    <Box sx={{ height: '100vh' , display: 'flex' , flexDirection: 'column' }}>
    
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


      <Box
      sx={{
       flex: 1,
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#f5f5f5',
        }}
     >
    
      <Box
        sx={{
          marginTop: '10px',
          width: 600,
          padding: 4,
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: 3,
      }}
      >
        <Typography variant="h5" sx={{ color: '#257CFF'}}>
        CADASTRAR NOVO CLIENTE
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
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
      />

      <TextField
        label="CPF"
        variant="outlined"
        name="cpf"
        value={formData.cpf}
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
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
      />

      <TextField
        label="Senha"
        variant="outlined"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enviar
      </Button>
      </Box>
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

export default FormComponent;