import { useState } from 'react';
import { handleLogin } from '../services/authApi';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [username, setUsername]=useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleEmailChange=(e)=>{
        setUsername(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();        
        try {
            const response = await handleLogin({ username, password });
            
            if (response && response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);       
                navigate('/');
            } else {
                console.error('Login failed:', response.statusText);
            }
          }catch (error) {
                console.error('Error during login:', error);
          }
        
    }    

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div className="mt-2">
                        <input onChange={handleEmailChange} id="username" name="username" type="username" autoComplete="username" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <p className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input onChange={handlePasswordChange} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </div>
            </div>

        </form>
    )
}