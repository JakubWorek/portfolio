import React, { useState } from 'react'
import { Link } from 'react-scroll'
import OpenNav from '../assets/icons/openNav'
import CloseNav from '../assets/icons/closeNav'

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'projects' },
    { id: 4, link: 'skills' },
    { id: 5, link: 'contact' },
  ]

  return (
    <div className="flex justify-between items-center w-full h-20 text-white px-4 bg-black">
      <div>
        <h1 className="text-4xl text-emerald-400 font-sign px-4">Jakub Worek</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id}
          className="px-4 cursor-pointer capitalize text-emerald-400 hover:scale-110 hover:text-emerald-600 duration-300">
            <Link to={link} smooth={true} duration={1000}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="text-emerald-400 cursor-pointer pr-4 z-10 md:hidden">
        {nav ? <CloseNav /> : <OpenNav />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-emerald-400'>
          {links.map(({id, link}) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-110 hover:text-emerald-600 duration-200 '>
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth={true}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar;