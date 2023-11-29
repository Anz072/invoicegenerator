import { Container } from "@mui/material";
import Stack from '@mui/system/Stack';
import { styled } from '@mui/system';
import "./dashboard-newest.styles.css";

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
  }));

const DashboardNewest = () => {
  return (
    <div>
      <h4>Recent Invoices</h4>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <div>
            <p>Client</p>
            <p>ID</p>
            <p>Creation Date</p>
            <p>Sum</p>
            <p>Actions</p>
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default DashboardNewest;
