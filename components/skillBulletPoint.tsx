import React, { FC } from 'react'

type Props = {
  url: string, text: string
}

const SkillBulletPoint: FC<Props> = ({url, text}) => {
  return (
    <li><a className='transition-all hover:text-orange-400' href={url}>{text}</a></li>
  )
}

export default SkillBulletPoint