import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import ExternalLinkLabel from '../components/externalLinkLabel'
import { motion } from 'framer-motion'
const Home: NextPage = () => {
  return (
    <main className="h-full dark:bg-black dark:text-white">
      <div className="grid gap-6 p-8 overflow-y-scroll md:w-3/4 lg:w-1/2">
        <header>
          <h1 className="text-5xl font-bold">mar-cial</h1>
          <div className="flex gap-2 pt-2">
            <motion.a
              href="https://github.com/mar-cial"
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              <Image
                src={'/gh.svg'}
                width={30}
                height={30}
                layout="fixed"
                alt="Github Profile"
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mario-césar-marcial-quintero-498353133/"
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              <Image
                src={'/linkedin.svg'}
                width={30}
                height={30}
                layout="fixed"
                alt="Linkedin Profile"
              />
            </motion.a>
            <motion.a
              href="https://www.reddit.com/user/mar-cial"
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              <Image
                src={'/reddit.svg'}
                width={30}
                height={30}
                layout="fixed"
                alt="Reddit Profile"
              />
            </motion.a>
          </div>
        </header>

        <section>
          <h2 className="text-sm font-medium text-orange-500">Intro</h2>
          <p>
            My name is Mario César Marcial Quintero and I am a self thaught
            front end developer based in Mexicali, Baja California, México.
          </p>
          <p>I have a year of experience with HTML, CSS and JavaScript.</p>
        </section>

        <section>
          <h2 className="text-sm font-medium text-orange-500">Tech Stack</h2>
          <p>All my current projects are built using:</p>
          <ul>
            <li>NextJs</li>
            <li>ReactJs</li>
            <li>TypeScript</li>
            <li>TailwindCSS</li>
            <li>Framer Motion</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-medium text-orange-500">Projects</h2>

          <article>
            <header>
              <h3 className="text-xl font-bold">Project Bytes</h3>
            </header>
            <p>
              This is a personal project to practice React every day. I call it
              Project Bytes because I do a project small enough to come up with
              it and complete it on the same day.
            </p>
            <div className="flex gap-4 pt-4">
              <ExternalLinkLabel
                url="https://github.com/mar-cial/project-bytes"
                label="GitHub repo"
              />
              <ExternalLinkLabel
                url="https://project-bytes-mar-cial.vercel.app"
                label="Check it out"
              />
            </div>
          </article>

          <article className="pt-6">
            <header>
              <h3 className="text-xl font-bold">Flex Strip</h3>
            </header>
            <p>
              This is a project for a small business that sells PVC rolls. It's
              a work in progress as of March 5, 2022. What I particularly like
              about this project is the clean and concise code quality required
              to have each component and page work exactly as intended, and to
              produce maintainable code.
            </p>
            <div className="flex gap-4 pt-4">
              <ExternalLinkLabel
                url="https://github.com/mar-cial/flexstrip"
                label="GitHub repo"
              />
              <ExternalLinkLabel
                url="https://flexstrip.vercel.app"
                label="Check it out"
              />
            </div>
          </article>
        </section>

        <section>
          <h2 className="text-sm font-medium text-orange-500">About me</h2>
          <p>
            I learned how to program on my own, because I've always had a strong
            interested in building useful software. Aside from computers, I love
            hanging out with my friends, exploring all the things there are to
            explore about coffee and playing video games.
          </p>
        </section>
      </div>
    </main>
  )
}

export default Home
