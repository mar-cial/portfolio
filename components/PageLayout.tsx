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

interface Socials {
  id: number
  link: string
  text: string
}

const socialLinks: Socials[] = [
  {
    id: 1,
    link: 'https://github.com/mar-cial',
    text: 'Github',
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/mar-cial/',
    text: 'LinkedIn',
  },
  {
    id: 3,
    link: 'https://www.instagram.com/mar.cial/',
    text: 'Instagram',
  },
]

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
    <div className="grid h-screen grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-5">
      <main className="grid gap-2 p-8 text-white bg-blue-600 md:col-span-2">
        <header className="flex flex-col gap-2">
          <div>
            <p className="text-blue-200 text-md font-console">Name</p>
            <h1 className="text-6xl font-bold font-display">Mario César Marcial Quintero</h1>
          </div>

          <div>
            <p className="text-blue-200 text-md font-console">Occupation</p>
            <h2>Front end software developer</h2>
          </div>

          <div>
            <p className="text-blue-200 text-md font-console">Socials</p>
            <div className="flex gap-2 group">
              {socialLinks.map((sl) => (
                <a
                  href={sl.link}
                  key={sl.id}
                  className={'hover:underline hover:underline-offset-4'}
                  target={'_blank'}
                >
                  {sl.text}
                </a>
              ))}
            </div>
          </div>
        </header>

        <section>
          <p className="text-blue-200 text-md font-console">Quick navigation</p>

          <div className="grid gap-4">
            {links.map((link) => (
              <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }}>
                <Link href={link.path} passHref>
                  <a>
                    <article className="grid grid-cols-3 p-4 rounded-md shadow-md">
                      <div className="col-span-2">
                        <h3 className="text-2xl font-medium font-display">{link.text}</h3>
                        <p className='font-text'>{link.desc}</p>
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
