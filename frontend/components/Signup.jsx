export default function SignUp() {
    return (
        <form className="max-w-sm mx-auto">

            {/* username */}
            <div className="mb-5 mt-10">
                <label htmlFor="username" className="block mb-2 text-sm font-serif font-medium text-gray-900 dark:text-white">Username</label>
                <input
                    type="username"
                    id="username"
                    className="shadow-xs bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:shadow-xs-light"
                    placeholder="Username"
                    required
                />
            </div>

            {/* email */}
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-serif font-medium text-gray-900 dark:text-white">Your Email</label>
                <input
                    type="email"
                    id="email"
                    className="shadow-xs bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:shadow-xs-light"
                    placeholder="name@example.com"
                    required
                />
            </div>

            {/* Password */}
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-serif font-medium text-gray-900 dark:text-white">Your Password</label>
                <input
                    type="password"
                    id="password"
                    className="shadow-xs bg-gray-50 text-gray-900 text-sm font-serif rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:shadow-xs-light"
                    required
                />
            </div>

            {/* Password Repeat */}
            <div className="mb-5">
                <label htmlFor="repeat-password" className="block mb-2 text-sm font-serif font-medium text-gray-900 dark:text-white">Repeat Password</label>
                <input
                    type="password"
                    id="repeat-password"
                    className="shadow-xs bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:shadow-xs-light"
                    required
                />
            </div>

            {/* Checkbox */}
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input
                        id="terms"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 bg-gray-50 dark:bg-gray-50 "
                        required
                    />
                </div>
                <label htmlFor="terms" className="ms-2 text-sm font-sans font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out dark:text-blue-500">terms and conditions</a></label>
            </div>

            {/* SignUp Button */}
            <div className="flex justify-center mb-5">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-900 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-900 transition duration-300 ease-in-out">
                    Register new account
                </button>
            </div>
        </form>

    );
}
