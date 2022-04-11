import Link from 'next/link'
import React from 'react'

type Route = {
  url: string
  text: string
}

const Navbar = () => {
  const routes: Route[] = [
    {
      url: '#projects',
      text: 'projects'
    },
    {
      url: '#contact',
      text: 'contact'
    }
  ]

  return (
    <nav className='flex items-center justify-center p-4 sm:justify-end sm:p-12'>
      <ul className='flex gap-6'>
        {
          routes.map((route, i) => (
            <li key={i}>
              <Link href={route.url} passHref>
                <a className='font-bold font-sm font-display'>{route.text.toUpperCase()}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar