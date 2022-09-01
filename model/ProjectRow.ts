import { IconType } from 'react-icons'

export default interface ProjectRow {
  id: number
  title: string
  data: string
  image: string
  repo: string
  live?: string
  tech: IconType[]
}
