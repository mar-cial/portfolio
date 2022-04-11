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
import Logo from '../components/logo'
import Image from 'next/image'

const Homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title>mar-cial | Full stack web developer</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className="relative overflow-hidden text-black bg-white font-display">
        <header>
          <Navbar />
        </header>

        <main className="relative p-4 sm:p-12" >
          <motion.div animate={{rotate: -360, transition: {ease: 'linear', duration: 50, repeat: Infinity}, origin: 0}} className={'absolute  w-full opacity-5  sm:top-0 -right-24 top-32 sm:-right-48'}>
          <Logo className={' '}/>
          </motion.div>
          <h1 className="text-3xl font-bold text-red-500 sm:text-6xl">
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

        <section className="p-4 text-white bg-gray-500 sm:p-12" id="projects">
          <h2 className="pb-4 text-2xl font-semibold">Projects</h2>

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
                  <a
                    href="https://github.com/mar-cial/flexstrip"
                    className={'pr-1'}
                  >
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
                  <a
                    href="https://github.com/mar-cial/project-bytes"
                    className={'pr-1'}
                  >
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
                    This is a personal project to practice React every day.
                    <br />
                    It is named Project Bytes because the projects are small
                    enough to come up with them and complete them on the same
                    day.
                    <br />
                    Some of the concepts I've explored are:
                  </p>
                  <ul className="pl-4 list-disc">
                    <li>Data fetching</li>
                    <li>Consuming REST API</li>
                    <li>Animations with framer motion</li>
                    <li>Typescript</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="p-4 sm:p-12 " id="about">
          <div className="grid items-center gap-6 sm:grid-cols-3">

            <div className='flex items-center justify-center'>
              <div className="sm:w-full md:w-3/4">
                <Image
                  src={'/face.jpg'}
                  width={1000}
                  height={1100}
                  layout="intrinsic"
                  className="rounded-md md:rounded-full "
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <CategoryTitle title="About me" />
              <p>
                Hey there. My name is César, and I love solving problems and
                learning new things. I believe every problem has a solution, and
                every idea has potential. I have a knack for knowing what
                businesses need, and work hard to achieve the set goals.
              </p>
              On the casual side, I love hanging out with my friends, watching
              shows with my girlfriend and playing with my ADHD dog. She's
              called Pipu. Send me a message if you'd like a pic of her :)
            </div>
          </div>
        </section>

        <footer className="p-4 text-white bg-black sm:p-12" id="contact">
          <CategoryTitle title={'Contact me'} />

          <div className="grid justify-center gap-6 sm:grid-cols-3">
            <div className="flex items-center sm:justify-start ">
              <a
                href="mailto: cesarmarcialq@gmail.com"
                className="text-2xl text-white transition-all hover:text-gray-300"
              >
                Send me an email!
              </a>
            </div>

            <motion.div className="flex items-center justify-center">
              <motion.div
                className="items-center w-24 h-24 sm:justify-center fill-white "
                animate={{
                  transition: {
                    ease: 'linear',
                    duration: 5.5,
                    repeat: Infinity,
                  },
                  rotate: -360,
                }}
              >
                <Logo className={'fill-current'} />
              </motion.div>
            </motion.div>

            <div className="flex items-center gap-6 sm:justify-end">
              <motion.a
                href="https://github.com/mar-cial"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <SiGithub className="w-12 h-12" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mar-cial/"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <SiLinkedin className="w-12 h-12" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/mar.cial/"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <SiInstagram className="w-12 h-12" />
              </motion.a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Homepage
