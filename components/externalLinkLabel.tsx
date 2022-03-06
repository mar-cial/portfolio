import { FC } from 'react'
import ExternalIcon from './externalIcon'
import { motion } from 'framer-motion'
type Props = {
  url: string
  label: string
}

const ExternalLinkLabel: FC<Props> = ({ url, label }) => {
  return (
    <motion.a
      href={url}
      whileHover={{ y: -2, color: '#f97316' }}
      whileTap={{ y: 0 }}
      className={'flex flex-col items-center justify-center text-center'}
    >
      <ExternalIcon />
      <span className="pt-2 font-mono text-xs font-medium">{label}</span>
    </motion.a>
  )
}

export default ExternalLinkLabel
