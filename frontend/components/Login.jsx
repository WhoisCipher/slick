'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            // Check if response is empty
            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch (error) {
                throw new Error("Invalid JSON response from server");
            }

            if (response.ok) {
                alert('Login successful');
                router.push('/dashboard');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
            console.error('Login error:', error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-5 mt-10">
                <label htmlFor="email" className="block mb-2 font-serif font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@example.com"
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 font-serif font-medium text-gray-900 dark:text-white">Your Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Password"
                    required
                />
            </div>
            {error && (
                <p className="text-red-600 text-center font-semibold bg-red-100 p-2 rounded-md mb-3 dark:text-red-400 dark:bg-red-900">
                    {error}
                </p>
            )}
            <div className="flex justify-center mb-5">
                <button type="submit" className="text-white bg-blue-950 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-950 dark:hover:bg-blue-800 transition duration-300 ease-in-out">
                    Login
                </button>
            </div>
        </form>
    );
}
