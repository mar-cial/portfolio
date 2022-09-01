import { NextPage } from 'next'
import Certifications from '@components/certifications'
import PageLayout from '@components/PageLayout'
import TechStack from '@components/TechStack'

const Homepage: NextPage = () => {
  return (
    <PageLayout>
      <section className="col-span-3 p-4 md:p-8 md:overflow-scroll">
        <header>
          <h2 className="text-4xl font-bold">Introduction</h2>
        </header>

        <div className="py-6 pt-3">
          <p>
            Hey there. I am a self-taught front-end developer fluent in english
            and spanish from Mexicali, Baja Calfornia. Most of my projects are
            done using{' '}
            <a
              href="https://nextjs.org"
              className="font-bold hover:underline"
              target={'_blank'}
            >
              NextJs
            </a>
            ,{' '}
            <a
              href="https://www.typescriptlang.org"
              className="font-bold hover:underline"
              target={'_blank'}
            >
              Typescript
            </a>{' '}
            and{' '}
            <a
              href="https://tailwindcss.com"
              className="font-bold hover:underline"
              target={'_blank'}
            >
              TailwindCSS.
            </a>
          </p>
        </div>

        <Certifications />

        <TechStack />
      </section>
    </PageLayout>
  )
}

export default Homepage
