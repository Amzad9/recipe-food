import React from 'react'

function Heading({headingSection}) {
  return (
    <>
    <div className="grid grid-cols-12">
        <div className="col-span-12">
            <h2 className='text-dark text-3xl font-Poppins uppercase mb-4'>{headingSection}</h2>
        </div>
    </div>
    </>
  )
}

export default Heading