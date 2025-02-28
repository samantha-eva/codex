import React from 'react'
import { NavLink } from 'react-router-dom';

const navLists = [
    {name: "Home", path:"/"},
    {name: "Projet", path:"/projet"},
    {name: "About", path:"/about"},
    {name: "contact", path:"contact"}
];
const Navbar = () => {
  return (
    <header className='bg-white py-6 border'>
        <nav className='container mx-auto flex justify-between px-5'>
            <a href='/'>
                <img src="/logo_codex.png" className='h-18'/>
            </a>
            <ul class="sm:flex hidde, items-center gap-8">
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
                
            </ul>
        </nav>
    </header>
  )
}

export default Navbar