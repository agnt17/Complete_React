import React from 'react'

function Cards({username, para}) {
  return (
    <>
       <div><div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
      <img className="w-full" src="https://wallpapercave.com/wp/wp3251792.jpg" alt="Mountain"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{username}</div>
        <p className="text-gray-700 text-base">
          {para}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        {/* <div className='Array_values'>{array}</div> */}
      </div>
    </div></div> 
    </>
  )
}

export default Cards