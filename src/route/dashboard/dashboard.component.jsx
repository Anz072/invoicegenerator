import { Typography } from "@mui/material";
import DashboardGrid from "../../components/dashboard-grid/dashboard-grid.component";
import DashboardNewest from "../../components/dashboard-newest/dashboard-newest.component";
import "./dashboard.styles.css";

function Dashboard() {
  return (
    <div className="dashboard-main">
      <span className="dashboard-main-title">
        <Typography variant="h4">Your Dashboard, User</Typography>
      </span>
      <DashboardGrid />
      <DashboardNewest />
    </div>
  );
}

export default Dashboard;
