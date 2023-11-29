import { Drawer, Button, Typography } from "@mui/material";
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
            background: "#222",
            borderRight: 0, 
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          variant="h5"
          component="h2"
          style={{
            color: "#222",
            backgroundColor: "rgba(192, 224, 201, 0.9)",
            padding: 12,
            textAlign:'center'
          }}
        >
          InvoiceSwift
        </Typography>
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
