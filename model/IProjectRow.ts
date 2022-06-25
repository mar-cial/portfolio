import { IconType } from 'react-icons'

export default interface IProjectRow {
  id: number
  title: string
  data: string
  image: string
  link: string
  tech: IconType[]
}
