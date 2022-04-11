import React, { ReactNode } from 'react'
import { SiReact } from 'react-icons/si'
import { SiNextdotjs } from 'react-icons/si'
import { SiGoland } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiDocker } from 'react-icons/si'
import { SiWeb3Dotjs } from 'react-icons/si'

type skillItemProps = {
  children: ReactNode
  label: string
}

const SkillItem = ({ label, children }: skillItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {children}
      <p className={'pt-1'}>{label}</p>
    </div>
  )
}

const SkillsRibbon = () => {
  return (
    <div className='flex flex-col gap-6'>

      <div>
        <h3 className="pb-4">Technologies I'm comfortable working with:</h3>
        <div className="flex gap-6 text-red-500 sm:gap-12">
          <SkillItem label={'React'}>
            <SiReact className={'h-12 w-12'} />
          </SkillItem>
          <SkillItem label={'NextJs'}>
            <SiNextdotjs className={'h-12 w-12'} />
          </SkillItem>
          <SkillItem label={'Node'}>
            <SiNodedotjs className={'h-12 w-12'} />
          </SkillItem>
          <SkillItem label={'MongoDB'}>
            <SiMongodb className={'h-12 w-12'} />
          </SkillItem>
        </div>
      </div>

      <div>
        <h3 className='pb-4'>Technologies I'm learning:</h3>
        <div className="flex gap-6 text-red-500 sm:gap-12">
          <SkillItem label={'Go'}>
            <SiGoland className={'h-12 w-12'} />
          </SkillItem>
          <SkillItem label={'Docker'}>
            <SiDocker className={'h-12 w-12'} />
          </SkillItem>
        </div>
      </div>
    </div>
  )
}

export default SkillsRibbon
