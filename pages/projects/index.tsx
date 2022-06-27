import { NextPage } from 'next'
import PageLayout from '../../components/PageLayout'
import { SiGoland, SiHtml5, SiNextdotjs, SiRedux, SiSass, SiTailwindcss } from 'react-icons/si'
import { IProjects, IProjectRow } from '../../model/IProjects'
import Image from 'next/image'

const projects: IProjects[] = [
  {
    id: 1,
    title: 'Products API',
    image: 'boxes.png',
    desc: 'Open source API that serves fake products for quick prototyping.',
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
    tech: [
      { id: 1, title: 'NextJs', icon: <SiNextdotjs /> },
      { id: 2, title: 'Tailwindcss', icon: <SiTailwindcss /> },
      { id: 3, title: 'Redux', icon: <SiRedux /> },
    ],
  }
]

const ProjectRow = ({ title, data, image, link, tech, id }: IProjectRow) => {
  return (
    <div className="grid gap-4">
      <div>
      <Image src={`/images/projects/${image}`} layout="responsive" width={1000} height={300} className="object-cover" />
      </div>
      {/* <-------------------- project header --------------------> */}
      <header>
        
        <p className="text-sm font-console text-slate-600">Name</p>
        <h3 className="text-2xl font-bold font-display">{title}</h3>
      </header>

      {/* <-------------------- project info --------------------> */}
      <div>
        <p className="text-sm font-console text-slate-600">Description</p>
        <p>{data}</p>
      </div>

      {/* <-------------------- project tech stack --------------------> */}
      <div>
        <p className="text-sm font-console text-slate-600">Tech used</p>
        <div className="grid grid-cols-3 gap-4">
          {tech.map((t) => (
            <div key={t.id} className="flex flex-col items-center">
              <div>{t.icon}</div>
              <h2 className="text-sm font-console">{t.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ProjectsPage: NextPage = () => {
  return (
    <PageLayout>
      <section className="col-span-3 p-8 md:overflow-scroll">
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
                link={''}
                tech={p.tech}
              />
            )
          })}
        </div>
      </section>
    </PageLayout>
  )
}

export default ProjectsPage
