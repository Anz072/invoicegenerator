import "./dashboard-newest.styles.css";
import DashboardTable from "../dasboard-table/dashboard-table.component";

const DashboardNewest = () => {
  return (
    <div style={{ width: "100%", marginTop: "60px" }}>
      <h4>Recent Invoices</h4>
      <DashboardTable />
    </div>
  );
};

export default DashboardNewest;
