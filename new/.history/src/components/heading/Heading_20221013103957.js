import React from 'react'

function Heading({level, headingSection}) {
  const Tag = "h" + level;
  return (
    <>
    <Tag className='text-dark text-3xl font-Poppins font-extrabold capitalize mb-4'>{headingSection}</Tag>
    </>
  )
}

export default Heading