import React from 'react'

interface aboutProps{
    name?: string
    desc?: string
}
const AboutPara:React.FC<aboutProps> = ({name, desc}) => {
  return (
    <div>
        <h1 className='text-red-600 text-3xl font-bold'>{name}</h1>
        <p className='text-blue-600 text-xl'>{desc}</p>
    </div>
  )
}

export default AboutPara