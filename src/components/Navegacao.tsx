import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton, Typography,Box, ListItemButton, ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { useNavigate } from "react-router-dom";

const MenuLateral: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false); 
  };

  return (
    <Box>
      
      <IconButton
        onClick={() => setIsOpen(true)}
        sx={{ color: '#fff', position: "fixed", top: 16, left: 16 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center' }}>
            Empresa
          </Typography>
          <List>
            <ListItemButton component = "li" onClick={() => handleNavigation("/pagina-inicial")} sx = {{gap: 1}}>
              <ListItemIcon sx ={{minWidth:"auto"}}>
                <HomeIcon fontSize = "large"/>
              </ListItemIcon>
                <ListItemText 
                  primary="Página Inicial" 
                  primaryTypographyProps={{fontSize: "1.1rem", fontWeight: "bold"}}/>
            </ListItemButton>
            <ListItemButton component = "li" onClick={() => handleNavigation("/cadastrar")} sx = {{gap: 1}}>
              <ListItemIcon sx ={{minWidth:"auto"}}>
                <ContactPageIcon fontSize = "large"/>
              </ListItemIcon>
                <ListItemText 
                  primary="Cadastrar Cliente" 
                  primaryTypographyProps={{fontSize: "1.1rem", fontWeight: "bold"}}/>
            </ListItemButton>
            <ListItemButton component = "li" onClick={() => handleNavigation("/lista-cadastros")} sx = {{gap: 1}}>
              <ListItemIcon sx ={{minWidth:"auto"}}>
                <PeopleIcon fontSize = "large"/>
              </ListItemIcon>
                <ListItemText 
                  primary="Lista de Clientes" 
                  primaryTypographyProps={{fontSize: "1.1rem", fontWeight: "bold"}}/>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MenuLateral;
