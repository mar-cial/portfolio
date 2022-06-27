import { NextPage } from 'next'
import PageLayout from '../../components/PageLayout'
import {
  SiGoland,
  SiHtml5,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiTailwindcss,
} from 'react-icons/si'
import { IProjects, IProjectRow } from '../../model/IProjects'
import Image from 'next/image'

const projects: IProjects[] = [
  {
    id: 1,
    title: 'Products API',
    image: 'boxes.png',
    desc: 'Open source API that serves fake products for quick prototyping.',
    repo: 'https://github.com/mar-cial/productsAPI',
    tech: [
      { id: 1, title: 'Go', icon: <SiGoland /> },
      { id: 2, title: 'HTML', icon: <SiHtml5 /> },
      { id: 3, title: 'SCSS', icon: <SiSass /> },
    ],
  },
  {
    id: 2,
    title: 'Súper',
    image: 'veggies.jpg',
    desc: 'Front-end visual interface for an e-commerce application.',
    repo: 'https://github.com/mar-cial/super',
    live: 'https://super-pi.vercel.app/',
    tech: [
      { id: 1, title: 'NextJs', icon: <SiNextdotjs /> },
      { id: 2, title: 'Tailwindcss', icon: <SiTailwindcss /> },
      { id: 3, title: 'Go', icon: <SiGoland /> },
    ],
  },
  {
    id: 3,
    image: 'rm.jpg',
    title: 'Rick and Morty API',
    desc: 'Web application that consumes the Rick and Morty API.',
    repo: 'https://github.com/mar-cial/rmdb',
    live: 'https://rmdb-mar-cial.vercel.app/',
    tech: [
      { id: 1, title: 'NextJs', icon: <SiNextdotjs /> },
      { id: 2, title: 'Tailwindcss', icon: <SiTailwindcss /> },
      { id: 3, title: 'Redux', icon: <SiRedux /> },
    ],
  },
]

const ProjectRow = ({ title, data, image, live, repo, tech }: IProjectRow) => {
  return (
    <div className="grid gap-4">
      <div>
        <Image
          src={`/images/projects/${image}`}
          layout="responsive"
          width={1000}
          height={500}
          className="object-cover"
        />
      </div>
      {/* <-------------------- project header --------------------> */}
      <header>
        <p className="text-sm font-console text-slate-600">Name</p>
        <h3 className="text-3xl font-bold font-display">{title}</h3>
      </header>

      {/* <-------------------- project info --------------------> */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <p className="text-sm font-console text-slate-600">Links</p>
          {live ? <a href={live} className="underline font-medium underline-offset-4">Live website</a> : ''}
          <a href={repo} className="underline font-medium underline-offset-4">Github Repo</a>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-console text-slate-600">Description</p>
          <p>{data}</p>
        </div>
      </div>

      {/* <-------------------- project tech stack --------------------> */}
      <div>
        <p className="text-sm font-console text-slate-600">Tech used</p>
        <div className="grid gap-4">
          <div className="flex  gap-6">
            {tech.map((t) => (
              <div key={t.id} className="flex flex-col items-center">
                <div className="text-3xl flex flex-col items-center pt-4">
                  {t.icon} <h2 className="text-sm font-console">{t.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectsPage: NextPage = () => {
  return (
    <PageLayout>
      <section className="col-span-3 p-4 md:p-8 md:overflow-scroll">
        <header>
          <h2 className="text-4xl font-bold">Projects</h2>
        </header>

        <div className="grid gap-6 py-4">
          {projects.map((p) => {
            return (
              <ProjectRow
                title={p.title}
                data={p.desc}
                id={p.id}
                image={p.image}
                repo={p.repo}
                live={p.live}
                tech={p.tech}
                key={p.id}
              />
            )
          })}
        </div>
      </section>
    </PageLayout>
  )
}

export default ProjectsPage
