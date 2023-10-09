import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <h1 className="text-4xl font-bold inline border-b border-gray-500 text-emerald-200"> About </h1>
        <p className="text-xl mt-20">
          A second-year computer science student with a penchant for web development. 
          His mind is a canvas, and lines of code are the strokes that bring his creativity to life. 
          He navigates the digital realm like a seasoned explorer, delving into the intricacies of 
          front-end elegance and back-end prowess. With each project, he sculpts the user experience, 
          sculpting the digital world to cater to every click and scroll. His journey is an odyssey of problem-solving, 
          a quest to optimize, innovate, and ultimately, revolutionize the web. With every line of code 
          he writes, he's architecting a future where the virtual and the real seamlessly intertwine. 
          The screen is his canvas, and the web is his masterpiece in the making. Yep, that's me.
        </p>
      </div>
    </div>
  );
};

export default About;