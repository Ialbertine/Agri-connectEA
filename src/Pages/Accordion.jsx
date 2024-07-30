import {React, useState} from 'react'


function Accordion({title, answer, answer1, answer2, answer3}) {
    const [moreContent, setMoreContent] = useState(false);

  return (
    <div className='px-3'>
        <button onClick={() => setMoreContent(!moreContent)} className='flex items-center w-full justify-between'>
            <span>{title}</span>
            {moreContent ? <span className='text-blue-600'>Close</span> : <span className='text-blue-600'>View details</span>}
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-500 text-sm ${

        moreContent ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className=' overflow-hidden flex flex-col border-b-2 border-green-700 gap-2 mb-3 rounded-2xl py-1 px-3'>
                <p>{answer}</p>
                <p>{answer1}</p>
                <p>{answer2}</p>
                <p>{answer3}</p>
            </div>
        </div>
    </div>
  )
}

export default Accordion