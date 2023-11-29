import DashboardGrid from '../../components/dashboard-grid/dashboard-grid.component';
import DashboardNewest from '../../components/dashboard-newest/dashboard-newest.component';
import './dashboard.styles.css';



function Dashboard() {
  return (
    <div className="dashboard-main">
     <DashboardGrid/>
     <DashboardNewest/>
    </div>
  );
}

export default Dashboard;
