import React from 'react'

function Navbar() {
  return (
    <section className='border'>

    <header className='container p-4 mx-auto flex justify-between items-center'>
      <div className="logo">
        {/* <img src="/logo.png" alt="logo" /> */}
        <h1 className='text-4xl font-bold indie-flower'>Makasih</h1>
      </div>
      <nav>
        <ul className='flex gap-4'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </nav>
    </header>
    </section>

  )
}

export default Navbar