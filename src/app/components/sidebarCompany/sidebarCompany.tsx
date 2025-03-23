import React, { useState } from "react";

interface SidebarCompanyProps {
  isOpen: boolean;
}

export default function SidebarCompany({ isOpen }: SidebarCompanyProps) {
    const [isSecondSidebarOpen, setSecondSidebarOpen] = useState(false);
  return (
    <div
      className={`fixed inset-y-0 left-0 w-[370px] bg-black transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-50`}
    > <button
    onClick={() => setSecondSidebarOpen(false)}
    className="absolute top-2 right-2 p-2 bg-gray-600 rounded-lg text-white"
  >
    ✖
  </button>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">New Sidebar</h2>
        {/* Add your content here */}
      </div>
    </div>
  );
}