import DashboardTableBanner from "./dashboard-table-banner.component";
import DashboardTableItem from "./dashboard-table-item.component";

const dummyData = [
  {
    client: "edOn",
    id: "SF01",
    creation: "2023.10.11",
    sum: "168.00",
  },
  {
    client: "edOn",
    id: "SF02",
    creation: "2023.11.11",
    sum: "442.00",
  },
  {
    client: "edOn",
    id: "SF03",
    creation: "2023.12.11",
    sum: "756.00",
  },
];

const DashboardTable = () => {
  return (
    <>
      <DashboardTableBanner />
      {dummyData.map((item) => (
        <DashboardTableItem key={item.id} {...item}/>
      ))}
    </>
  );
};

export default DashboardTable;
