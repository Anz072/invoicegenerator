import "./dashboard-grid.styles.css";
import { Grid, Paper, Typography } from "@mui/material";

const gridStyled = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: 0,
  boxShadow: "none",
  paddingLeft: 20,
  justifyContent: "center",
  height: 180,
  borderRadius: 0,
};

const gridStyledAdd1 = {
  backgroundColor: "rgba(209, 247, 220, 0.6)",
};
const gridStyledAdd2 = {
  backgroundColor: "rgba(192, 224, 201, 0.5)",
};
const gridStyledAdd3 = {
  backgroundColor: "rgba(215, 203, 255, 0.6)",
};
const gridStyledAdd4 = {
  backgroundColor: "rgba(225, 199, 255, 0.5)",
};

const DashboardGrid = () => {
  return (
    <Grid
      style={{
        marginTop: 40,
      }}
      container
      spacing={1}
    >
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Paper style={{ ...gridStyled, ...gridStyledAdd1 }}>
          <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
            2023 m. pajamos
          </Typography>
          <Typography
            sx={{ color: "text.primary", fontSize: 38, fontWeight: "medium" }}
          >
            720,00 €
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Paper style={{ ...gridStyled, ...gridStyledAdd2 }}>
          <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
            Lapkričio mėn. pajamos
          </Typography>
          <Typography
            sx={{ color: "text.primary", fontSize: 38, fontWeight: "medium" }}
          >
            380,00 €
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Paper style={{ ...gridStyled, ...gridStyledAdd3 }}>
          <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
            2023 m. išlaidos:
          </Typography>
          <Typography
            sx={{ color: "text.primary", fontSize: 38, fontWeight: "medium" }}
          >
            0,00 €
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Paper style={{ ...gridStyled, ...gridStyledAdd4 }}>
          <Typography sx={{ color: "text.secondary", fontSize: 16 }}>
            Lapkričio mėn. išlaidos
          </Typography>
          <Typography
            sx={{ color: "text.primary", fontSize: 38, fontWeight: "medium" }}
          >
            0,00 €
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardGrid;
