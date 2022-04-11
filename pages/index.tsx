import Head from 'next/head'
import Navbar from '../components/navbar'
import SkillsRibbon from '../components/skillsRibbon'
import CategoryTitle from '../components/categoryTitle'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import { BiLinkExternal } from 'react-icons/bi'
import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
const Homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title>mar-cial | Full stack web developer</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className="text-white bg-red-600 font-display">
        <header>
          <Navbar />
        </header>

        <main className="p-4 sm:p-12">
          <h1 className="text-3xl font-bold sm:text-6xl">
            Mario César
            <br />
            Marcial Quintero
          </h1>
          <h3>Full stack software developer</h3>
          <p className="pt-12">
            I'm a self taught developer based in Mexicali, Baja California,
            México.
            <br />
            My passion is web development and all its intricacies.
          </p>
        </main>

        <section className="p-4 sm:p-12">
          <CategoryTitle title={'Skill set'} />
          <SkillsRibbon />
        </section>

        <section className="p-4 text-black bg-yellow-500 sm:p-12" id="projects">
          <CategoryTitle title={'Projects'} />

          <article className="py-4 border-black border-y-2">
            <div>
              <header>
                <h3 className={'pb-2 font-console text-2xl'}>
                  Flex Strip - PVC Roll supplier
                </h3>
              </header>

              <div className={'flex gap-6'}>
                <div
                  className={
                    'flex items-center transition-all hover:translate-x-1'
                  }
                >
                  <a href="https://github.com/mar-cial/flexstrip" className={'pr-1'}>
                    GitHub repo
                  </a>
                  <BiLinkExternal />
                </div>
                <motion.div
                  className={
                    'flex items-center transition-all hover:translate-x-1'
                  }
                >
                  <a href="https://flexstrippvc.com" className={'pr-1'}>
                    Live website
                  </a>
                  <BiLinkExternal />
                </motion.div>
              </div>

              <div className={'pt-6'}>
                <div>
                  <p>
                    This is an SPA application developed for Flex Strip, a PVC
                    Roll supplier in Mexicali, Baja California.
                    <br />
                    The main goals of this project was to showcase every model
                    of all the products they offer.
                  </p>
                  <p>
                    Building dynamic pages was facilitated by NextJs. Email
                    contact is handled using SendGrid API.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="py-4">
            <div>
              <header>
                <h3 className={'pb-2 font-console text-2xl'}>
                  RMDB - Rick and Morty API DB
                </h3>
              </header>

              <div className={'flex gap-6'}>
                <div
                  className={
                    'flex items-center transition-all hover:translate-x-1'
                  }
                >
                  <a href="https://github.com/mar-cial/rmdb" className={'pr-1'}>
                    GitHub repo
                  </a>
                  <BiLinkExternal />
                </div>
                <motion.div
                  className={
                    'flex items-center transition-all hover:translate-x-1'
                  }
                >
                  <a
                    href="https://rmdb-mar-cial.vercel.app/"
                    className={'pr-1'}
                  >
                    Live website
                  </a>
                  <BiLinkExternal />
                </motion.div>
              </div>

              <div className={'pt-6'}>
                <div>
                  <p>
                    RMDB is a NextJs app that consumes the Rick and Morty API to
                    display all the characters, locations and episodes in the
                    show.
                    <br />
                    Fetching is made using RTK Query, a Redux Toolkit toolset
                    that facilitates data fetching and caching.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="py-4 border-black border-y-2">
            <div>
              <header>
                <h3 className={'pb-2 font-console text-2xl'}>Project bytes</h3>
              </header>

              <div className={'flex gap-6'}>
                <div
                  className={
                    'flex items-center transition-all hover:translate-x-1'
                  }
                >
                  <a href="https://github.com/mar-cial/project-bytes" className={'pr-1'}>
                    GitHub repo
                  </a>
                  <BiLinkExternal />
                </div>
                <motion.div
                  className={
                    'flex items-center transition-all hover:translate-x-1'
                  }
                >
                  <a
                    href="https://project-bytes-mar-cial.vercel.app"
                    className={'pr-1'}
                  >
                    Live website
                  </a>
                  <BiLinkExternal />
                </motion.div>
              </div>

              <div className={'pt-6'}>
                <div>
                  <p>
                    This is a personal project to practice React every day.<br />It is named Project Bytes because the projects are small enough to come up with them and complete them on the same day.<br />Some of the concepts I've explored are:
                    <ul className='pl-4 list-disc'>
                      <li>
                        Data fetching
                      </li>
                      <li>Consuming REST API</li>
                      <li>Animations with framer motion</li>
                      <li>Typescript</li>
                    </ul> 
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="p-4 sm:p-12" id="about">
          <CategoryTitle title='About me' />
          <p>Hey there. My name is César, and I love solving problems and learning new things. I believe every problem has a solution, and every idea has potential. I have a knack for knowing what businesses need, and work hard to achieve the set goals.</p>
          <p>On the casual side, I love hanging out with my friends, watching shows with my girlfriend and playing with my ADHD dog. She's called Pipu. Send me a message if you'd like a pic of her :)</p>
        </section>

        <footer className="p-4 bg-black sm:p-12" id="contact`">
          <CategoryTitle title={'Contact me'} />

          <a href = "mailto: cesarmarcialq@gmail.com" className='text-red-400 transition-all hover:text-red-600'>Send me an email!</a>    
          <h4 className='py-4 font-medium text-gray-400'>Socials</h4>   
          <div className='flex gap-6'>
            <motion.a href="https://github.com/mar-cial" whileHover={{y:-2}} whileTap={{y: 0}}><SiGithub className='w-12 h-12'/></motion.a>
            <motion.a href="https://www.linkedin.com/in/mar-cial/" whileHover={{y:-2}} whileTap={{y: 0}}><SiLinkedin className='w-12 h-12'/></motion.a>
            <motion.a href="https://www.instagram.com/mar.cial/" whileHover={{y:-2}} whileTap={{y: 0}}><SiInstagram className='w-12 h-12'/></motion.a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Homepage
