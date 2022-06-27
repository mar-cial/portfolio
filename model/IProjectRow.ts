import { IconType } from 'react-icons'

export default interface IProjectRow {
  id: number
  title: string
  data: string
  image: string
  repo: string
  live?: string
  tech: IconType[]
}
