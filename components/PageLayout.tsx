import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

import { BsHouseDoor, BsGrid1X2 } from 'react-icons/bs'
import { BiBrain } from 'react-icons/bi'

interface ILinks {
  id: number
  text: string
  desc: string
  icon: JSX.Element
  path: string
}

const links: ILinks[] = [
  {
    id: 1,
    text: 'Intro',
    desc: 'A little bit about me and the technologies I use',
    icon: <BsHouseDoor className="text-4xl" />,
    path: '/',
  },
  {
    id: 2,
    text: 'Projects',
    desc: "A detailed description of some projects I've done",
    icon: <BsGrid1X2 className="text-3xl" />,
    path: '/projects',
  },
  {
    id: 3,
    text: 'Interests',
    desc: 'My hobbies and interests',
    icon: <BiBrain className="text-4xl" />,
    path: '/interests',
  },
]

const PageLayout = ({ children }: Props) => {
  return (
    <div className="grid h-screen md:grid-cols-2 lg:grid-cols-5">
      <main className="grid col-span-2 gap-2 p-8">
        <header className="flex flex-col gap-2">
          <div>
            <p className="font-mono text-gray-500 text-md">Name</p>
            <h1 className="text-6xl font-bold">Mario César Marcial Quintero</h1>
          </div>

          <div>
            <p className="font-mono text-gray-500 text-md">Occupation</p>
            <h2>Front end software developer</h2>
          </div>

          <div>
            <p className="font-mono text-gray-500 text-md">Socials</p>
            <div className='flex gap-2'>
              <p>Github</p>
              <p>LinkedIn</p>
              <p>Instagram</p>
            </div>
          </div>
        </header>

        <section>
          <p className="font-mono text-gray-500 text-md">Quick navigation</p>

          <div className="grid gap-4">
            {links.map((link) => (
              <motion.div whileHover={{y: -3}} whileTap={{y: 0}}>
                <Link href={link.path} passHref>
                  <a>
                    <article className="grid grid-cols-3 p-4 rounded-md shadow-md">
                      <div className="col-span-2">
                        <h3 className="text-2xl font-medium">{link.text}</h3>
                        <p>{link.desc}</p>
                      </div>

                      <div className="flex items-center justify-end">
                        <div>{link.icon}</div>
                      </div>
                    </article>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {children}
    </div>
  )
}

export default PageLayout
