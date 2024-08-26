import React, { useState } from "react";
import "./navbar.css";
import { IoMdMenu } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import Sidebar from "../sidebar";

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <button
                        className="icon-btn"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <IoMdMenu />
                    </button>
                    <p>|</p>
                    <h1>Taobao</h1>
                </div>
                <div className="icon-navbar">
                    <button className="icon-btn">
                        <FiShoppingCart />
                    </button>
                    <button className="icon-btn">
                        <CiSearch />
                    </button>
                </div>
            </nav>

            {isSidebarOpen && (
                <div
                    className={
                        isSidebarOpen ? "sidebar sidebar-open" : "sidebar"
                    }
                >
                    <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
                </div>
            )}
        </header>
    );
}

export default Navbar;
