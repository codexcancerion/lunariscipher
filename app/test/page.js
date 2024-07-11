"use client"
import axios from 'axios';
import { useState } from 'react';

export default function Page() {
    const [loading, setLoading] = useState(false);

    // Function to test your API endpoint
    const testApiEndpoint = async () => {
        const apiUrl = '/api/lunify';

        try {
            setLoading(true);

            // Example payload with input, mode, and key
            const payload = {
                input: 'Hello, world.',
                mode: true, // Example mode
                key: '1234' // Example key
            };

            // Make a POST request to your API endpoint
            const response = await axios.post(apiUrl, payload);

            // Log the response data (processed result)
            console.log('Response:', response.data);

            return response.data.result; // Assuming your API returns { result }
        } catch (error) {
            // Handle errors
            console.error('Error:', error);
            throw new Error('Failed to fetch data from API');
        } finally {
            setLoading(false);
        }
    };

    // Handle form submission
    const handleSubmit = async () => {
        try {
            const result = await testApiEndpoint();
            console.log('Processed Result:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <button
                type="button"
                onClick={handleSubmit}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
            >
                {loading ? 'Processing...' : 'Test API Endpoint'}
            </button>
        </div>
    );
}
