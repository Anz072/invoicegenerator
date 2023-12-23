import { Typography } from "@mui/material";
import DashboardGrid from "../../components/dashboard-grid/dashboard-grid.component";
import DashboardNewest from "../../components/dashboard-newest/dashboard-newest.component";
import "./dashboard.styles.css";
import MainButton from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const go_create_page = () => {
    navigate("create_invoice")
  };

  return (
    <div className="dashboard-main">
      <div className="dashboard-title-container">
        <span className="dashboard-main-title">
          <Typography variant="h4">Your Dashboard, User</Typography>
        </span>
        <MainButton content="Create new!" fn={go_create_page} />
      </div>
      <DashboardGrid />
      <DashboardNewest />
    </div>
  );
}

export default Dashboard;
