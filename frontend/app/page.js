export default function Home() {
    return (
        <main>
            <div className="flex justify-center relative z-10 text-center text-white p-8">
                <a href="login">
                    <button className="w-36 h-14 text-2xl mr-4 rounded-md bg-white text-slate-900 text-center hover:bg-slate-950 hover:text-white duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                        Login
                    </button>
                </a>
                <a href="signup">
                    <button className="w-36 h-14 text-2xl rounded-md bg-transparent border border-white text-white text-center hover:bg-slate-950 hover:border-slate-950 hover:text-white duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                        SignUp
                    </button>
                </a>
            </div>
        </main>
    );
}
