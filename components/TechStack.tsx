import React from 'react'
import {
  SiTypescript,
  SiNextdotjs,
  SiGoland,
  SiTailwindcss,
  SiReact,
} from 'react-icons/si'

interface TechStackModel {
  id: number
  brand: string
  icon: JSX.Element
}

const Stacks: TechStackModel[] = [
  {
    id: 1,
    brand: 'React',
    icon: <SiReact />,
  },
  {
    id: 2,
    brand: 'NextJs',
    icon: <SiNextdotjs />,
  },
  { id: 3, brand: 'Typescript', icon: <SiTypescript /> },
  {
    id: 4,
    brand: 'Tailwindcss',
    icon: <SiTailwindcss />,
  },
  {
    id: 5,
    brand: 'Go',
    icon: <SiGoland />,
  },
]
const TechStack = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Tech stack</h2>
      <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {Stacks.map((stack) => (
          <div
            className="flex items-center gap-4 p-2 rounded-md shadow-md"
            key={stack.id}
          >
            <div className="text-2xl">{stack.icon}</div>
            <p className=""> {stack.brand}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
