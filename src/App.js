import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./route/dashboard/dashboard.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Clients from "./route/clients/clients.component";
import Settings from "./route/settings/settings.component";
import Invoices from "./route/invoices/invoices.components";
import InvoiceGenerator from "./route/invoice_generator/invoice_generator.component";

function App() {
  return (
    // <Dashboard />
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/create_invoice" element={<InvoiceGenerator />} />
      </Route>
    </Routes>
  );
}

export default App;
