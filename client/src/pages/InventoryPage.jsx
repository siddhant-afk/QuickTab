import { useState } from "react";
import InventoryModal from "../components/InventoryModal";
const mockInventory = [
  {
    id: "PRD-001",
    name: "Consultation Session",
    description: "1-hour freelance consult",
    price: 1500,
    category: "Service",
    sku: "",
  },
  {
    id: "PRD-002",
    name: "Vitamin C Tablets",
    description: "60 tablets bottle",
    price: 250,
    category: "Medical",
    sku: "MED-VT-003",
  },
  {
    id: "PRD-003",
    name: "Custom Chair",
    description: "Ergonomic wooden chair",
    price: 3200,
    category: "Furniture",
    sku: "FUR-CHAIR-001",
  },
];

const InventoryPage = () => {
  const [items, setItems] = useState(mockInventory);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  function handleAddClick() {
    setEditItem(null);
    setModalOpen(true);
  }

  function handleEditClick(item) {
    setEditItem(item);
    setModalOpen(true);
  }

  function handleModalSubmit(formData) {
    if (editItem) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editItem.id ? { ...item, ...formData } : item
        )
      );
    } else {
      const newItem = {
        ...formData,
        id: `PRD-${String(items.length + 1).padStart(3, "0")}`,
      };
      setItems((prev) => [...prev, newItem]);
    }
  }

  return (
    <div className="p-4 pt-15">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-4xl font-semibold text-slate-700"> 📦 Inventory</h2>
        <button
          className="bg-green-100 text-green-600 px-4 py-2 rounded hover:bg-green-200 text-sm"
          onClick={handleAddClick}
        >
          + Add Item
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-200">
            <tr className="text-gray-600">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">SKU</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-200 hover:bg-gray-50"
              >
                <td className="px-4 py-2 font-medium">{item.name}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2">₹{item.price}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.sku || "-"}</td>
                <td className="px-4 py-2 text-right">
                  <button
                    className="text-slate-600 hover:underline mr-2"
                    onClick={() => handleEditClick(item)}
                  >
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <InventoryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
        initialData={editItem}
      />
    </div>
  );
};

export default InventoryPage;
