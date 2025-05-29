import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header(props: {active?: number}) {
    return (
      <AppBar position="static" color="primary">
          <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Pallavi Eswara
              </Typography>
              <Box>
                  <Button 
                        variant={props.active === 0 ? "contained" : "text"}
                        color={props.active === 0 ? "secondary" : "inherit"}
                        component={RouterLink}
                        to="/"
                        sx={{marginLeft: 3}}
                  >
                        Home
                  </Button>
                  <Button
                        variant={props.active === 1 ? "contained" : "text"}
                        color={props.active === 1 ? "secondary" : "inherit"}
                        component={RouterLink}
                        to="/about"
                        sx={{marginLeft: 3}}
                  >
                        About
                  </Button>
                  <Button
                        variant={props.active === 2 ? "contained" : "text"}
                        color={props.active === 2 ? "secondary" : "inherit"}
                        component={RouterLink}
                        to="/highered"
                        sx={{marginLeft: 3}}
                  >
                        Higher Ed
                  </Button>
                  <Button
                        variant={props.active === 3 ? "contained" : "text"}
                        color={props.active === 3 ? "secondary" : "inherit"}
                        component={RouterLink}
                        to="/arts-and-community"
                        sx={{marginLeft: 3}}
                  >
                        Arts & Community
                  </Button>
                  <Button
                        variant={props.active === 4 ? "contained" : "text"}
                        color={props.active === 4 ? "secondary" : "inherit"}
                        component={RouterLink}
                        to="/contact"
                        sx={{marginLeft: 3}}
                  >
                        Contact
                  </Button>
              </Box>
          </Toolbar>
      </AppBar>
    );
}

export default Header;
