import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center bg-gray-950 justify-between px-6 py-4 text-white shadow-[-5px_5px_5px_rgba(0,0,0,0.5)]">
            <Link href="/"><a className="text-4xl font-serif font-bold">Slick</a> </Link>

            <ul className="flex space-x-6">
                <li>
                    <a href="login/" className="mr-8 inline-block text-xl
                                                dark:hover:text-gray-500 hover:text-gray-300
                                                transition duration-300  ease-in-out font-sans">
                        Login
                    </a>
                    <a href="signup/" className="mr-8 inline-block text-xl
                                                 dark:hover:text-gray-500 hover:text-gray-300
                                                 transition duration-300 ease-in-out font-sans">
                        SignUp
                    </a>
                    <a href="about/" className="mr-8 inline-block text-xl
                                                dark:hover:text-gray-500 hover:text-gray-300
                                                transition duration-300 ease-in-out font-sans">
                        About
                    </a>
                </li>
            </ul>
        </nav >
    );
}
