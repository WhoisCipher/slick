import Link from 'next/link'

export default function SignupPage() {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col text-white bg-rose-900">
            <form className="bg-black/20 backdrop-blur-md p-8 rounded-lg shadow-xl w-96">
                <h2 className="text-2xl text-cyan-500 font-bold mb-6 text-center">
                    Signup
                </h2>

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 border border-transparent bg-black/50 text-white rounded mb-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-transparent bg-black/50 text-white rounded mb-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border border-transparent bg-black/50 text-white rounded mb-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="w-full p-3 bg-cyan-600 hover:bg-cyan-800 text-white text-lg rounded-lg transition-colors duration-200 ease-in-out"
                >
                    Signup
                </button>

                {/* Add Login Link */}
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-300">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-cyan-500 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
