import React from "react";
import { Box, TextField, Typography } from "@mui/material";


 const ListaCad = () => {
    return(
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
    <TextField
        label="Pesquisar"
        variant="outlined"
        name="name"
        
    />
        </Box>
    </Box>
    );


    


}

export default ListaCad;