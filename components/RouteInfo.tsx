import React from "react";

const routes = [
  { name: "Contact", path: "/contact" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
];

export default function RouteInfo() {
  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "1rem 2rem",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      zIndex: 1000,
    }}>
      <h3 style={{ marginBottom: "0.5rem" }}>Routes</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {routes.map((route) => (
          <li key={route.path} style={{ marginBottom: "0.25rem" }}>
            <a href={route.path} style={{ color: "#fff", textDecoration: "underline" }}>
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
