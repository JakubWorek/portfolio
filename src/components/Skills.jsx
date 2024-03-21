import React from 'react'

const Skills = () => {
  const technologies = [
    {
      id: 1,
      name: 'JavaScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      style: 'shadow-yellow-500',
    },
    {
      id: 2,
      name: 'React.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      name: 'Next.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
      style: 'shadow-gray-800',
    },
    {
      id: 4,
      name: 'Express.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
      style: 'shadow-gray-600'
    },
    {
      id: 5,
      name: 'MongoDB',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      style: 'shadow-green-600',
    },
    {
      id: 6,
      name: 'Node.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      style: 'shadow-green-500',
    },
    {
      id: 7,
      name: 'Tailwind CSS',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      style: 'shadow-sky-400',
    },
    {
      id: 8,
      name: 'Git',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      style: 'shadow-orange-700',
    }
  ];

  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <h1 className="text-4xl font-bold inline border-b border-gray-500 text-emerald-200"> Technologies I worked with </h1>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, name, src, style }) => (
            <div key={id} className={`bg-gray-500 shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={name} className='w-20 mx-auto' />
              <p className='mt-4'>
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;