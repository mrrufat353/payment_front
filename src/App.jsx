// Importing React Router components and page components
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/HomePage/Home.jsx";
import { Login } from "./Pages/Login/Login.jsx";
import { Profile } from "./Pages/Profile/Profile.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import Register from "./Pages/Register/register.jsx";
import { NotFoundPage } from "./Pages/Nopage/NoPage.jsx";
import { AddBank } from "./Pages/AddBank/addBank.jsx";
import { Benefeciary } from "./Pages/Beneficiary/beneficiary.jsx";
import { PayBills } from "./Pages/PayBills/paybills.jsx";
import { Transaction } from "./Pages/Transaction/transaction.jsx";
import { Wallet } from "./Pages/Wallet/wallet.jsx";

// App functional component
function App() {
    // Return statement for rendering the entire application
    return (
        <>
            {/* React Router configuration for defining routes */}
            <Routes>
                {/* Main layout for consistent page structure */}
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>

                {/* Additional routes outside the main layout */}
                <Route>
                    <Route path="/addBank" element={<AddBank />} />
                    <Route path="/beneficiary" element={<Benefeciary />} />
                    <Route path="/payBills" element={<PayBills />} />
                    <Route path="/transaction" element={<Transaction />} />
                    <Route path="/wallet" element={<Wallet />} />
                </Route>
            </Routes>
        </>
    );
}

// Exporting the App component as the default export
export default App;

