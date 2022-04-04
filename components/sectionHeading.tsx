import React, { FC } from 'react'

type Props = {
  text: string
}

const SectionHeading: FC<Props> = ({text}) => {
  return (
    <h2 className='font-semibold text-orange-500 font-display'>{text}</h2>
  )
}

export default SectionHeading