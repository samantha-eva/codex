import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className='m-4 p-4 bg-tomato font-sans'>
      <p>Bonsoir</p>
        {/* <nav>Navbar</nav>
        <div className='flex-grow'>
          <Outlet/>
        </div>
        <footer className='mt-auto'>Footer</footer> */}
    </div>
   </>
  
  );
}

export default App
