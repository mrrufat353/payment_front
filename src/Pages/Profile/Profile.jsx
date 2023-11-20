// Import necessary dependencies from React and React Router
import { Link } from "react-router-dom";

// Import the SCSS module for styling
import pStyle from "./profile.module.scss";

// Functional component representing the user profile navigation
export function Profile() {
    return (
        <>
            {/* Navigation container with styling from the profile.module.scss */}
            <nav className={pStyle.navContainer}>
                {/* Navigation list */}
                <ul>
                    {/* Navigation links using React Router's Link component */}
                    <li>
                        <Link to="/addBank">Add Bank</Link>
                    </li>
                    <li>
                        <Link to="/beneficiary">Beneficiary</Link>
                    </li>
                    <li>
                        <Link to="/payBills">Pay Bills</Link>
                    </li>
                    <li>
                        <Link to="/transaction">Transaction</Link>
                    </li>
                    <li>
                        <Link to="/wallet">Wallet</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
