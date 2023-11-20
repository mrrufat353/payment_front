import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar.jsx";

// Functional component representing the overall layout of the application
export function Layout() {
    return (
        <>
            {/* Include the Navbar component for navigation */}
            <Navbar />

            {/* Outlet component to render the nested views based on routing */}
            <Outlet />
        </>
    );
}
