import { Link, useNavigate } from "react-router-dom";
import style from "../Navbar/Navbar.module.scss";

// Functional component representing the navigation bar
export function Navbar() {
    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Event handler for logout button click
    const handleLogout = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <>
            {/* Header container with styling from Navbar.module.scss */}
            <header className={style.container}>
                {/* Application name */}
                <div>
                    Wallet App
                </div>

                {/* Navigation links and logout button */}
                <ul>
                    {/* Home link */}
                    <Link className={style.liComponent} to='/'>Home</Link>

                    {/* Profile link */}
                    <Link className={style.liComponent} to='/profile'>Profile</Link>

                    {/* Login link */}
                    <Link className={style.liComponent} to='/login'>Login</Link>

                    {/* Logout button with event handler */}
                    <button className={style.LogBtn} onClick={handleLogout}>
                        Log out
                    </button>
                </ul>
            </header>
        </>
    );
}

