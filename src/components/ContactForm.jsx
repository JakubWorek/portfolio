import React from 'react'

const ContactForm = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white md:h-screen">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full'>
        <h1 className="text-4xl font-bold inline border-b border-gray-500 text-emerald-200"> Send me a message </h1>

        <div className=" flex justify-center items-center mt-5">
          <form className=" flex flex-col w-full md:w-1/2" method="POST" action="https://getform.io/f/2a91aa7f-1923-4cad-b4da-1f588878c888">
            <input  
              type="text"
              name="name"
              placeholder="Enter your name"
              required = "true"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input 
              type="email"
              name="email"
              placeholder="Enter your email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <textarea 
              name="message"
              placeholder="Enter your message"
              required = "true"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <button type="submit" className="bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-3 my-2 rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm