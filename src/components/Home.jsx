import React from 'react'
import myimage from '../assets/images/myimage.jpg'
import { Link } from 'react-scroll'
import ArrowRight from '../assets/icons/arrowRight'

const Home = () => {
  return (
    <div 
      name="home" 
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
    >
      <div 
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
      >
        <div 
          className="flex flex-col justify-center h-full"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-200">
            Aspiring Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            My name is Jakub and I'm 21 years old Computer Science student.
            I'm interested in web applications development and want to become full-stack developer in the future.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next.js and MongoDB.
            <br />
            Also I'm interested in learning new technologies and programming languages.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-emerald-500 to-green-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img 
            src={myimage}
            alt = "myimage"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home