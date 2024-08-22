import { useState } from 'react';
import { handleSignUp } from '../services/authApi';
import {useNavigate } from 'react-router-dom';

export default function Signup(){
  const navigate = useNavigate()

  const [username, setUsername]=useState('');
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [wrongPasswordErrMsg, setWrongPasswordErrMsg] = useState(false)
  const [usernameError, setUsernameError] = useState(false)
  
  const handleUsernameChange=(e)=>{
      setUsername(e.target.value)
  }
  const handlePasswordChange=(e)=>{
      setPassword(e.target.value)
  }

  const handlePassword2Change=(e)=>{
    setPassword2(e.target.value)
  }

  const passwordCheck = (username, password, password2) =>{
    if(username.length < 5) {
        setUsernameError(true)
        return false
    }
    return password === password2
  }


  const handleSubmit= async (e)=>{
      e.preventDefault();        
      try {
          const CheckOk = await passwordCheck(username ,password, password2)          
          if(CheckOk){
            const response = await handleSignUp({ username, password });
          
            if (response && response.status === 201) {
                const token = response.data.token;
                localStorage.setItem('token', token);       
                navigate('/all-blogs');
            } else {
                console.error('Login failed:', response.statusText);
            }
          }else{
            setWrongPasswordErrMsg(true)
          }
        }catch (error) {
              console.error('Error during login:', error);
        }
      
  }    

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register a new account</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div className="mt-2">
                          <input onChange={handleUsernameChange} id="username" name="username" type="username" autoComplete="username" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        {usernameError && <div className='text-red-500'>Username should be atleast 6 characters</div>}
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input onChange={handlePasswordChange} id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Re-enter Password</label>
                        </div>
                        <div className="mt-2">
                            <input onChange={handlePassword2Change} id="password2" name="password2" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        {wrongPasswordErrMsg && <div className='text-red-500'>Passwords should match</div>}
                    </div>

                    <div>
                        <button type="submit" className="mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                    </div>
                </div>
            </div>

        </form>
    )
}