import Login from '@/components/Login'

export default function LoginPage() {
    return (
        <>
            <Login />
            <div className="flex justify-center items-center flex-col">
                <h1>No Account? <a className="text-blue-500 dark:text-blue-500" href="../signup">SignUp!</a></h1>
            </div>
        </>
    );
}
