import Signup from '@/components/Signup';

export default function SignupPage() {
    return (
        <>
            <Signup />
            <h1 className="flex justify-center font-sans items-center">already have an acoount? <a className="text-blue-600 ml-1 hover:text-blue-900 transition duration-300 ease-in-out" href="../login/">Login</a></h1>
        </>
    );
}
