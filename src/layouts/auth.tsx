import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

interface AdminLayoutProps {
  children?: React.ReactNode;
}

const AuthLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Box minWidth="350px" height="min-content">
          <Typography
            variant="h5"
            color="initial"
            textAlign="center"
            mb={3}
            textTransform="uppercase"
            fontWeight="bold"
          >
            Đăng nhập hệ thống
          </Typography>
          <Box mb={1.5}>
            <TextField
              id="username"
              label="Tài khoản"
              variant="outlined"
              fullWidth={true}
            />
          </Box>
          <Box>
            <TextField
              id="username"
              type="password"
              label="Mật khẩu"
              variant="outlined"
              fullWidth={true}
            />
          </Box>
          <Box mt={2} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="info"
              fullWidth={true}
              sx={{
                padding: '10px',
              }}
            >
              Đăng nhập
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AuthLayout;
