import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  bg-slate-800 px-8 py-3">
        <Link className="font-bold text-white" href="/">SKCoding.</Link>
        <Link className="bg-white p-2 font-bold rounded-lg" href="/AddTopic">Add Topic</Link>
    </nav>
  )
  }

export default Navbar