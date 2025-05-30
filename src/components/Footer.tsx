import React from 'react';
import { Box, Container, Typography, Link, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import theme from '../theme';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
            <Typography variant="body2">
                Website by <a href="https://ananyat129.github.io/" target="_blank" style={{ color: 'inherit'}}>Ananya Tadigadapa</a>.
            </Typography>

          <Typography variant="body2">
            © {new Date().getFullYear()} Pallavi Eswara.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/pallavi-eswara-86b59a11/"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="Linkedin"
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
