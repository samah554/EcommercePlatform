import React from 'react'

const NewsletterBox = () => {

  const handleOnSubmit = (event) => {
    event.preventDefault();
  }
  
  return (
    <div className='text-center'>
      <p className="text-2xl font-medium text-gray-800">Subscribe and get 20% off/-</p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat nemo voluptatum incidunt ad minima molestiae doloremque sequi, consequuntur laborum libero fuga voluptate rerum vero nam sit saepe odio id assumenda.
      </p>
      <form onSubmit={handleOnSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required/> 
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox