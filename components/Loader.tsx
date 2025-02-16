import Image from 'next/image'
import React from 'react'

function Loader() {
  return (
    <div className=''>
        <p className=' w-full px-[20px]  right-0 left-0 fixed top-[15%] text-white font-extrabold text-3xl text-center'>
            Please wait while we load the page
        </p>
    <div className="loader scale-[1.5]">
    <div className="box">
      <div className="logo">
       <Image
        src="/assets/logo/brainup-logo-apple.png"
        alt="logo"
        width={70}
        height={70}
        />
      </div>
    </div>
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
  </div>
  </div>
  
  )
}

export default Loader