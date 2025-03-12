import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
     const  [username, setUsername] = useState('');
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');
    const  [message, setMessage] = useState('');
  return (
    <div  className='max-w-sm bg-white mx-auto p-8 mt-36'>
           <h2 className='text-2xl font-semibold pt-5'>Login</h2>
           <form className='space-y-5 maw-w-sm mx-auto pt-8'>
               <input type="text" value={username} 
                   placeholder='Username'
                   required
                   className='w-full bg-primary focus:outline-none px-5 py-3' />
   
               <input type="text" value={email} 
                   placeholder='Email'
                   required
                   className='w-full bg-primary focus:outline-none px-5 py-3' />
                   
               <input type="password" value={password}
                   placeholder='password'
                   required
                   className='w-full bg-primary focus:outline-none px-5 py-3' />
                   {
                       message && <p className='text-red-500'>{message}</p>
                   }
               <button className='w-full mt-5 bg-black hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>Login</button>
           </form>
           <p className='my-5 text-center'>Déja un compte ? <Link to="/Login"
           className='text-red-700 italic'>Se connecter</Link></p>
           
       </div>
  )
}

export default Register