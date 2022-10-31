import React from 'react'

function Heading({level}) {
  const Tag = "h" + level;
  return (
    <>
    <div className="grid grid-cols-12">
        <div className="col-span-12">
            <Tag className='text-dark text-3xl font-Poppins font-extrabold capitalize mb-4'>{headingSection}</Tag>
        </div>
    </div>
    </>
  )
}

export default Heading