import React from 'react'

const SkillsGroup = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-6">
        {children}
    </div>
  )
}

export default SkillsGroup