import Signup from '@/components/Signup';

export default function SignupPage() {
    return (
        <>
            <Signup />
            <h1 className="flex justify-center items-center">already have an acoount? <a className="text-blue-500" href="../login/">Login</a></h1>
        </>
    );
}
