import { Drawer, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
const drawerWidth = 200;

const NAV_LINKS = {
  DASHBOARD: "/",
  INVOICES: "invoices",
  CLIENTS: "clients",
  SETTINGS: "settings",
};

const stylingButton = {
  p: 2,
  background: "transparent",
  color: "#FFF",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.21)",
  },
};
const Sidebar = () => {
  const navigate = useNavigate();

  const navigationHandler = (loc) => {
    navigate(loc);
  };

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#000",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <h2 styles={{ color: "#FFF" }}>InvoiceSwift</h2>
        <Button
          variant="text"
          sx={stylingButton}
          onClick={() => navigationHandler(NAV_LINKS.DASHBOARD)}
        >
          Dashboard
        </Button>
        <Button
          variant="text"
          sx={stylingButton}
          onClick={() => navigationHandler(NAV_LINKS.INVOICES)}
        >
          Invoices
        </Button>
        <Button
          variant="text"
          sx={stylingButton}
          onClick={() => navigationHandler(NAV_LINKS.CLIENTS)}
        >
          Clients
        </Button>
        <Button
          variant="text"
          sx={stylingButton}
          onClick={() => navigationHandler(NAV_LINKS.SETTINGS)}
        >
          Settings
        </Button>
      </Drawer>
      <Outlet />
    </>
  );
};

export default Sidebar;
