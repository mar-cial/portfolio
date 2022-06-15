import { NextPage } from 'next'
import PageLayout from '../components/PageLayout'
import Academind from '../components/avv'
import { SiTypescript } from 'react-icons/si'

const Homepage: NextPage = () => {
  return (
    <PageLayout>
      <section className="col-span-3 p-10 overflow-scroll">
        <header>
          <h2 className="text-4xl font-bold">Introduction</h2>
        </header>

        <div className="pt-3">
          <p>
            Hey there. I am a 27 years old front end developer fluent in english
            and spanish from Mexicali, Baja Calfornia. Most of my projects are
            done using{' '}
            <a href="https://nextjs.org" className="font-bold hover:underline">
              NextJs
            </a>
            ,{' '}
            <a
              href="https://www.typescriptlang.org"
              className="font-bold hover:underline"
            >
              Typescript
            </a>{' '}
            and{' '}
            <a
              href="https://tailwindcss.com"
              className="font-bold hover:underline"
            >
              TailwindCSS.
            </a>
          </p>
        </div>

        <div className="py-6">
          <h2 className="text-3xl font-bold">Certifications</h2>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 pt-4 pb-4 border-b-2">
              <a href="https://academind.com">
                <Academind className={'w-24 fill-current'} />
              </a>
              <a
                href="https://www.udemy.com/share/101Wby3@Vj8F39_EAV8xjA9iSQIaRIAe61TB9QDv6dGtN3ylruS7oi_qOlC5N9HPTHG2xNko/"
                className="text-lg font-medium hover:underline"
              >
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </a>
            </div>
            <div>
              <p className="font-mono text-gray-600 text-md">
                Course description
              </p>
              <p className="italic">
                "Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
                Redux, React Routing, Animations, Next.js and way more!"
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 pt-4 pb-4 border-b-2">
              <a href="https://academind.com">
                <SiTypescript className="text-6xl" />
              </a>
              <a
                href="https://www.udemy.com/share/101whA3@yQUQ7bAzATAKp5nlUs_rtL4-irCVL-zN7tY_AXt09s3Sy0CBBS2ung_yxemSp-ru/"
                className="text-lg font-medium hover:underline"
              >
                Typescript with modern React (i.e. hooks, context, suspense)
              </a>
            </div>

            <div>
              <p className="font-mono text-gray-600 text-md">
                Course description
              </p>
              <p className="italic">
                "Adding typescript to a modern react project with hooks
                (useState, useContext, useEffect) and code splitting with lazy."
              </p>
            </div>

            <div>
              <p className="font-mono text-gray-600 text-md">
                Things I learned
              </p>
              <p>
                I learned a lot about working with Typescript + React. Hooks are
                tricky to understand, at least to me. The subject I struggled
                the most were mouse events and form handlers, so I found a lot
                of the material about it in this couse was very useful and easy
                to understand.
              </p>
            </div>
          </div>
        </div>
        
      </section>
    </PageLayout>
  )
}

export default Homepage
