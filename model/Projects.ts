export interface Tech {
  id: number
  title: string
  icon: JSX.Element
}

export interface ProjectModel {
  id: number
  title: string
  desc: string
  media: string
  mediaSrc: string
  repo: string
  live?: string

  tech: Tech[]
}

export interface ProjectRowModel {
  id: number
  title: string
  data: string
  media: string
  mediaSrc: string
  repo: string
  live?: string
  tech: Tech[]
}
