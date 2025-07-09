import React from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const links = ["hero", "about", "skills", "projects", "contact"];

  return (
    <nav className='fixed top-0 left-0 w-full bg-black text-white px-6 py-4 shadow z-50'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Ashutosh</h1>
            {/* desktop */}
            <ul className='hidden md:flex gap-7'>
                {links.map((link) => (
                    <li key ={link}> <a href={`#${link}`} className='capitalize hover:text-gray-400'>{link}</a> </li>
                ))}
            </ul>
        </div>
    </nav>

  )
}

export default Navbar
