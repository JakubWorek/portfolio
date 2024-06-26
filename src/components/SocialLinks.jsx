import React from 'react'
import Github from '../assets/icons/github'
import Linkedin from '../assets/icons/linkedin'

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn 
          <Linkedin />
        </>
      ),
      href: "https://www.linkedin.com/in/jakub-worek-531611173/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub 
          <Github />
        </>
      ),
      href: "https://github.com/JakubWorek",
      style: "rounded-br-md"
    }
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks