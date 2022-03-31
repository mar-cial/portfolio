import React, { FC } from 'react'

type Props = {
  url: string
  text: string
}

// Link to be used when in between a paragraph
const TextLink: FC<Props> = ({url, text}) => {
  return (
    <a href={url} className='font-medium text-orange-400 transition-all hover:text-orange-500'>{text}</a>
  )
}

export default TextLink