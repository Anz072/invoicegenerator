import "./dashboard-grid.styles.css";
import { Grid, Paper, Typography } from "@mui/material";

const gridStyled = {
  display: "flex",
  flexDirection:"column",
  alignItems: "start",
  gap: 0,
  paddingLeft: 20,
  justifyContent: "center",
  backgroundColor: "white",
  height: 180,
  borderRadius: 0,
};

const DashboardGrid = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Paper style={gridStyled}>
          <Typography sx={{ color: 'text.secondary',fontSize: 16, }}>2023 m. pajamos</Typography>
          <Typography sx={{ color: 'text.primary', fontSize: 38, fontWeight: 'medium' }} >
            720,00 €
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Paper style={gridStyled}>
          <Typography sx={{ color: 'text.secondary',fontSize: 16, }}>Lapkričio mėn. pajamos</Typography>
          <Typography sx={{ color: 'text.primary', fontSize: 38, fontWeight: 'medium' }}>380,00 €</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Paper style={gridStyled}>
          <Typography sx={{ color: 'text.secondary',fontSize: 16, }}>2023 m. išlaidos:</Typography>
          <Typography  sx={{ color: 'text.primary', fontSize: 38, fontWeight: 'medium' }}>0,00 €</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Paper style={gridStyled}>
          <Typography sx={{ color: 'text.secondary',fontSize: 16, }}>Lapkričio mėn. išlaidos</Typography>
          <Typography sx={{ color: 'text.primary', fontSize: 38, fontWeight: 'medium' }}>0,00 €</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardGrid;
