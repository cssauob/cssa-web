import { useState } from 'react';
import { FaHouse } from "react-icons/fa6";
import { FaHistory,FaRegUser,FaAngleUp } from "react-icons/fa";
import { BsFillBarChartLineFill } from "react-icons/bs";
import './AdminMenu.css';
function AdminMenu() {
    const [sidebarShrink, setSidebarShrink] = useState(false);
 
    const toggleMenu = () => {
        setSidebarShrink(!sidebarShrink);
    };

    return (
        <main>
            <div id="mysidebar" className={`sidebar ${sidebarShrink ? "shrink_sidebar" : ""}`}>
                <ul className="sidebar-navlink">
                    <li><a href="#"><FaHouse /><span>Home</span></a></li>
                    <li><a href="#"> <BsFillBarChartLineFill /><span>Analytics</span></a></li>
                    <li><a href="#"><FaHistory /><span>Activity</span></a></li>
                    <li><a href="#"><FaRegUser /><span>Users</span></a></li>
                </ul>
                <button onClick={toggleMenu} id="toggleBtn" className="collapse-btn">
                    <FaAngleUp />
                </button>
            </div>
            
        </main>
    );
}


export default AdminMenu;

