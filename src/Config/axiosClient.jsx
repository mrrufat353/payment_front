import axios from "axios";

// Create an Axios instance with custom configuration
const axiosClient = axios.create({
    baseURL: 'http://localhost:8085/',  // Base URL for API requests
    timeout: 5000,  // Request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',  // Set content type for JSON requests
    },
});

// Export the configured Axios instance as the default export
export default axiosClient;
