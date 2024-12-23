import React from "react";

const Aside = () => {
  const currentPath = window.location.pathname;
  return (
    <aside className="sidebar">
      <a
        href="/dashboard/customers"
        className={currentPath === "/dashboard/customers" ? "active" : ""}
      >
        Customers
      </a>
      <a
        href="/dashboard/medicines"
        className={currentPath === "/dashboard/medicines" ? "active" : ""}
      >
        Medicines
      </a>
      <a
        href="/dashboard/orders"
        className={currentPath === "/dashboard/orders" ? "active" : ""}
      >
        Orders
      </a>
    </aside>
  );
};

export default Aside;
