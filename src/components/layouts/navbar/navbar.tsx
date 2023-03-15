import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-12 px-2">
      <div className="flex gap-4">
        <div>Home</div>
        <div>Contact</div>
      </div>
      <div>Logo</div>
    </nav>
  );
};
