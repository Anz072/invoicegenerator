import "./dashboard-table-banner.styles.css";

const DashboardTableBanner = () => {
  return (
    <div className="banner-invoice-item">
      <div className="banner-invoice-item-left">
        <span>Client</span>
        <span>ID</span>
        <span>Creation Date</span>
        <span>Sum</span>
      </div>
      <div className="banner-invoice-item-right">
        <p>Actions</p>
      </div>
    </div>
  );
};

export default DashboardTableBanner;
