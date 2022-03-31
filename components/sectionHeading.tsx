import React, { FC } from 'react'

type Props = {
  text: string
}

const SectionHeading: FC<Props> = ({text}) => {
  return (
    <h2 className='text-lg font-semibold text-orange-500'>{text}</h2>
  )
}

export default SectionHeading