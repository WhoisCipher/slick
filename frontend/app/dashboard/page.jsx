'use client';

import Sidebar from "@/components/Sidebar"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('http://localhost:5000/dashboard', { credentials: 'include' });
                if (!res.ok) { throw new Error('You are not authenticated') }
                const data = await res.json();
                setUser(data.user);
            } catch (error) {
                console.error('Auth error:', error);
                router.push('/login');
            } finally {
                setLoading(false);
            }
        }
        checkAuth();
    }, []);

    if (loading) return <p>Loading...</p>;


    return (
        <>
<<<<<<< Updated upstream
            <Sidebar />
=======
>>>>>>> Stashed changes

        </>
    );

}
