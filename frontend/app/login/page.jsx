import Login from '@/components/Login'

export default function LoginPage() {
    return (
        <>
            <Login />
            <h1>No Account? <a className="text-blue-500" href="../signup">SignUp</a></h1>
            <h1><a href="../dashboard">login</a></h1>
        </>
    );
}
