import React from "react";
import AdminNavBar from "@/components/adminComponents/AdminNavBar";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
          <AdminNavBar />
          {children}
    </div>
  );
}