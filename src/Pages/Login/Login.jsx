import axiosClient from "../../config/axiosClient.jsx";
import { useState } from "react";
import style from "../Login/Login.module.scss";
import { useNavigate } from "react-router-dom";

// Functional component for the Login form
export function Login() {
    // State for form values
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        showPassword: false,
    });

    // Hook for navigation
    const navigate = useNavigate();

    // Function to navigate to the registration page
    const handleNavigate = () => {
        navigate("/register");
    }

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Example: Sending a GET request to the root endpoint
            const response = await axiosClient.get('/', formValues);

            console.log(response);
            console.log('Login successful!', response);
        } catch (error) {
            if (error.response) {
                console.log('Server error:', error.response.data);
            } else if (error.request) {
                console.log('No response from server:', error.request);
            } else {
                console.log('Request error:', error.message);
            }
        }

        // Additional logic (e.g., redirect after successful login)
        // Uncomment the next line if you have a function named onSubmit
        // onSubmit(formValues);
    }

    // Function to handle input changes
    const handleChange = (e) => {
        const { value, name, type, checked } = e.target;
        setFormValues((props) => ({
            ...props,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    // JSX structure for the Login component
    return (
        <div className={style.container}>
            <div>
                {/* ... other code ... */}
                <div className={style.contactWrapper}>
                    <header className={style.loginCta}>
                        <h2>Account Login</h2>
                    </header>
                    <form onSubmit={handleSubmit}>
                        {/* ... input fields and form structure ... */}
                        <div className={style.formRow}>
                            <input type="submit" value='Submit' />
                        </div>
                    </form>
                    {/* ... other code ... */}
                </div>
            </div>
        </div>
    );
}

// Default export of the Login component
export default Login;
