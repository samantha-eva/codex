import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../redux/features/auth/authApi';
import { setUser } from '../../redux/features/auth/authSlice';

const Login = () => {
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');
    const  [message, setMessage] = useState('');
    const [loginUser, {isLoading: loginLoading}] = useLoginUserMutation();

    const dispatch = useDispatch(); // Ajoute useDispatch()
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        const data = {
            email,
            password
        }
        try{
            const response = await loginUser(data).unwrap();
            const {token,user } = response;

            // 🔹 Stocke dans Redux
            dispatch(setUser({ user }));
            localStorage.setItem('user', JSON.stringify(user));
      
            navigate("/")


            console.log(response);
        }catch(error){
            setMessage("Please provide a valid email and passwoord")

        }
    }

  return (
    <div  className='max-w-sm bg-white mx-auto p-8 mt-36'>
        <h2 className='text-2xl font-semibold pt-5'>Login</h2>
        <form className='space-y-5 maw-w-sm mx-auto pt-8' onSubmit={handleLogin}>
            <input type="text" value={email} 
                placeholder='Email'
                required
                onChange={(e) => setEmail(e.target.value)}
                className='w-full bg-primary focus:outline-none px-5 py-3' />
                
            <input type="password" value={password}
                placeholder='password'
                required
                onChange={(e) => setPassword(e.target.value)}
                className='w-full bg-primary focus:outline-none px-5 py-3' />
                {
                    message && <p className='text-red-500'>{message}</p>
                }
            <button disabled={loginLoading} className='w-full mt-5 bg-black hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>Login</button>
        </form>
        <p className='my-5 text-center'>Don't have a accout ? <Link to="/register"
        className='text-red-700 italic'>Register</Link></p>
        
    </div>
  )
}

export default Login