import React from 'react'

function SectionTitle({title, text, action}) {
  return (
    <div className='flex items-center justify-between gap-5 mb-6'>
      <div>
        <h2 className='m-0 text-[27px] -tracking-wide font-bold'>{title}</h2>
        {text && <p className='m-[7px 0 0 ] '>{text}</p>}
      </div>
      {action}
    </div>
  )
}

export default SectionTitle