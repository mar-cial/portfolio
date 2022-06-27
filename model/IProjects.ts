export interface Tech {
  id: number
  title: string
  icon: JSX.Element
}

export interface IProjects {
  id: number
  title: string
  desc: string
  image: string
  repo: string
  live?: string

  tech: Tech[]
}

export interface IProjectRow {
  id: number
  title: string
  data: string
  image: string
  repo: string
  live?: string
  tech: Tech[]
}
