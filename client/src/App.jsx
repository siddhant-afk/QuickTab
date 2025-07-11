import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

import InvoicesPage from "./pages/InvoicesPage";
import CustomersPage from "./pages/CustomersPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layout/Layout";
import InventoryPage from "./pages/InventoryPage";
import InvoiceBuilder from "./pages/InvoiceBuilder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/invoices/new" element={<InvoiceBuilder />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
