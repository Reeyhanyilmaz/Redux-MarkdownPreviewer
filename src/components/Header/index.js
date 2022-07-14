import React from 'react'

function Header() {
  return (
    <div>
        <button className='bg-indigo-300 absolute top-2 right-2 h-10 w-10 rounded-full mb-10'>?</button>
        <br />
        <h1 className='p-3 text-4xl'>Markdown Previewer</h1>
    </div>
  )
}

export default Header;