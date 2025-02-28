import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const navLists = [
    {name: "Home", path:"/"},
    {name: "Projet", path:"/projet"},
    {name: "About", path:"/about"},
    {name: "contact", path:"contact"}
];
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='bg-white py-6 border'>
        <nav className='container mx-auto flex justify-between px-5'>
            <a href='/'>
                <img src="/logo_codex.png" className='h-18'/>
            </a>
            <ul class="sm:flex hidden items-center gap-8">
                {
                    navLists.map((list, index) => (
                    <li>
                        <NavLink to= {`${list.path}`}
                            className={({ isActive}) =>
                                isActive ? "active": ""
                            }
                        >{list.name}</NavLink>
                    </li>
                    ))
                }
                <li>
                    <NavLink to="/login">Login</NavLink>                
                </li> 
            </ul>


            <div className='flex items-center sm:hidden'>
                <button 
                onClick={toggleMenu}
                className='flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900 '>
                    {
                        isMenuOpen ? <IoCloseSharp className='size-6' />: <IoMenuSharp className='size-6'/>
                    }
                </button>
            </div>
        </nav>

        {
            isMenuOpen && (
                <ul className='fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50'>
                    {
                        navLists.map((list, index) => (
                        <li className='mt-5 px-4'>
                            <NavLink to= {`${list.path}`}
                                className={({ isActive}) =>
                                    isActive ? "active": ""
                                }
                            >{list.name}</NavLink>
                        </li>
                        ))
                    }
                    <li className='px-4 mt-5'>
                        <NavLink to="/login">Login</NavLink>                
                    </li> 
                </ul>
            )
        }
    </header>
  )
}

export default Navbar