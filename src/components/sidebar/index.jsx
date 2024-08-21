import React from "react";
import "./sidebar.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi"; // menu
import { CgNotes } from "react-icons/cg"; // note
import { HiShoppingCart } from "react-icons/hi"; // shop
import { GoStarFill } from "react-icons/go"; // star
import { MdOutlineAccessTime } from "react-icons/md"; // time
import { RiGift2Line } from "react-icons/ri"; // gift

function Sidebar({ setIsSidebarOpen }) {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Tizimga kirish</h2>
                <button
                    className="close-btn"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    ✖
                </button>
            </div>
            <ul className="sidebar-menu">
                <li className="sidebar-table">
                    <Link to={"#"}>
                        <span className="icon">
                            <FaHome />
                        </span>
                        <span>Ro'yhatdan o'tish</span>
                    </Link>
                </li>
                <li className="sidebar-table">
                    <Link to={"#"}>
                        <span className="icon">
                            <TfiMenuAlt />
                        </span>
                        <span>Oldingi sahifa</span>
                    </Link>
                </li>
                <li className="sidebar-table">
                    <Link to={"#"}>
                        <span className="icon">
                            <CgNotes />
                        </span>
                        <span>Ommabop toifalar</span>
                    </Link>
                </li>
                <li className="sidebar-table">
                    <Link to={"#"}>
                        <span className="icon">
                            <HiShoppingCart />
                        </span>
                        <span>Mening buyurtmam</span>
                    </Link>
                </li>
                <li className="sidebar-table">
                    <Link to={"#"}>
                        <span className="icon">
                            <GoStarFill />
                        </span>
                        <span>Xarid savati</span>
                    </Link>
                </li>
                <li className="sidebar-table">
                    <Link to={"#"}>
                        <span className="icon">
                            <MdOutlineAccessTime />
                        </span>
                        <span>Sevimlilar</span>
                    </Link>
                </li>
                <li className="sidebar-table">
                    <Link to={"#"}>
                        <span className="icon">
                            <RiGift2Line />
                        </span>
                        <span>Karta va kupon to'plami</span>
                    </Link>
                </li>
                <li className="sidebar-table">
                    <Link to={"#"}>
                        <span className="icon">
                            <RiGift2Line />
                        </span>
                        <span>Onlayn yordam</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

{
    /* Yangi foydalanuvchi ro'yxatdan o'tish
oldingi sahifa
Ommabop toifalar
mening buyurtmam
xarid savati
sevimlilar
oyoq izlari
Karta va kupon to'plami
Onlayn yordam */
}
