import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import ExternalLinkLabel from '../components/externalLinkLabel'
import { motion } from 'framer-motion'
import ContactForm from '../components/contactForm'

const Home: NextPage = () => {
  return (
    <main className="h-full dark:bg-black dark:text-white">
      <div className="grid gap-6 p-8 overflow-y-scroll text-justify md:w-3/4 lg:w-1/2">
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
          <p>I'm currently looking for work as a frontend developer.</p>
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
            <h3>Some of the small projects </h3>
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

          <article className='pt-6'>
            <header>
              <h3 className='text-xl font-bold'>RMDB - Rick and Morty API DB</h3>
            </header>
            <p>RMDB is a project made to showcase my vanilla ReactJs skills. In this project, the data was fetched from <a href="https://rickandmortyapi.com" className='font-medium text-orange-400'>Rick and Morty API</a> using the <a href="https://redux-toolkit.js.org/tutorials/rtk-query" className='font-medium text-orange-400'>RTK Query API.</a> I used Create React App, Redux, Redux Toolkit Query, and styled-components.</p>
            <div className="flex gap-4 pt-4">
              <ExternalLinkLabel
                url="https://github.com/mar-cial/rmdb"
                label="GitHub repo"
              />
              <ExternalLinkLabel
                url="https://rmdb-mar-cial.vercel.app"
                label="Check it out"
              />
            </div>
          </article>
        </section>

        <section>
          <h2 className="text-sm font-medium text-orange-500">About me</h2>
          <p>
            I like challenges and find solutions to everyday problems. My ideal
            job is one that allows me to approach solutions in a creative way,
            analyzing all the possible solutions where something can go wrong to
            correct them. In the work environment, I like the feeling of
            collaboration towards a common goal. I know how difficult it is to
            run a business, and this has allowed me to develop a "solution
            first" mentality. I think that all problems have a solution, so when
            faced with one, the most important thing is to stay calm and work as
            a team. <br />I am very interested in observing the areas of
            opportunity everywhere I go. If I buy coffee in the morning, I think
            about how the shopping experience could be improved through the app.
            If I have to do government related stuff, I think about how
            blockchain technologies could be implemented both to facilitate and
            make the process more ergonomic and secure. I like to dream of all
            the ways that technology can make our lives easier, and I am excited
            to think that I can participate in the development of some of them.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium text-orange-500">Contact</h2>
          <p>Send me a message!</p>
          <p>I'd love to receive feedback, tips and suggestions.</p>
          <ContactForm />
        </section>
      </div>
    </main>
  )
}

export default Home
