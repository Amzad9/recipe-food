import React from 'react'

function Heading({level, headingSection, creditText}) {
  const Tag = "h" + level;
  return (
    <>
    <p className='font-medium'>{creditText}</p>
    <Tag className='text-dark text-3xl font-Poppins font-extrabold capitalize mb-4'>{headingSection}</Tag>
    </>
  )
}

export default Heading