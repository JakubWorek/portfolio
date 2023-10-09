import React from 'react';
import piwodoro from '../assets/images/piwodoro.png';
import store_front from '../assets/images/store_front.png';
import store_server from '../assets/images/store_server.png';

const Projects = () => {
  const projects = [
    {id: 1, src: piwodoro, link: 'https://github.com/JakubWorek/piwodoro'},
    {id: 2, src: store_front, link: 'https://github.com/JakubWorek/store_front'},
    {id: 3, src: store_server, link: 'https://github.com/JakubWorek/store_server'},
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <h1 className="text-4xl font-bold inline border-b border-gray-500 text-emerald-200"> My Projects </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-10">
          {projects.map(({id, src, link}) => (
            <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
              <img src={src} alt="project" className="rounded-md duration-200 hover:scale-110"/>
              <div className='flex items-center justify-center'>
                <a className="px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-emerald-500 to-green-500 cursor-pointer rounded-md" href={link}>Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects