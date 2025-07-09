import React from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const links = ["hero", "about", "skills", "projects", "contact"];

  return (
    <nav className='fixed top-0 left-0 w-full bg-[#051129] text-white px-6 py-4 shadow z-50'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Ashutosh</h1>
            {/* desktop */}
            <ul className='hidden md:flex gap-7'>
                {links.map((link) => (
                    <li key ={link}> <a href={`#${link}`} className='capitalize text-2xl hover:text-gray-400'>{link}</a> </li>
                ))}
            </ul>
            {/* humbburger for mob */}
            <div className='md:hidden'>
                <button onClick={() => setMenuOpen(!menuOpen)} className='focus:outline-none'>
                  <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
                </button>
            </div>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <ul className='md:hidden  flex flex-col items-center bg-[#051129] py-4 gap-4'>
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link}`} className='block py-2 px-4 capitalize hover:bg-gray-700'>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
    </nav>

  )
}

export default Navbar
