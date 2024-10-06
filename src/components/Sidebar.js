import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

function Sidebar() {
  return (
    <div className="sidebar w-64 h-full bg-dark text-white p-4"> {/* Use h-full */}
      <h2 className="text-lg font-semibold mb-4">Filter</h2>
      <ul className="list-unstyled">
        <li className="mb-4">
          <Link to={'/products'} className="block p-3 rounded-md hover:bg-[#00509e] transition-colors">
            Get All Products
          </Link>
        </li>
        <li className="mb-2">
          <Link to={'/categories'} className="block p-3 rounded-md hover:bg-[#00509e] transition-colors">
            Get All Categories
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
