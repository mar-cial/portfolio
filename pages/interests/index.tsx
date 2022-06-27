import { NextPage } from 'next'
import Image from 'next/image'
import PageLayout from '../../components/PageLayout'

const InterestsPage: NextPage = () => {
  return (
    <PageLayout>
      <section className="col-span-3 p-4 md:p-8 md:overflow-scroll">
        <header>
          <h2 className="text-4xl font-bold">Interests</h2>
        </header>

        <div className="grid gap-6 py-6">
          <p>
            I love coffe, the beach, spending time with my fiancée and my little
            dog. She's called Pipu :)
          </p>
          <div className="flex justify-center">
            <div className="relative w-full md:w-1/2">
              <Image
                src={'/images/interests/pipu.JPG'}
                width={1080}
                height={1920}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default InterestsPage
