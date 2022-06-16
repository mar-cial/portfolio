import { NextPage } from 'next'
import React from 'react'
import PageLayout from '../../components/PageLayout'

const ProjectsPage: NextPage = () => {
  return (
    <PageLayout>
      <section className="col-span-3 p-8 md:overflow-scroll">
        <header>
          <h2 className="text-4xl font-bold">Projects</h2>
        </header>
      </section>
    </PageLayout>
  )
}

export default ProjectsPage
