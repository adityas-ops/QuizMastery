import Header from '@/components/reusable/Header'
import React from 'react'

function Page() {
  return (
    <div>
      <Header/>
        <div className=' pt-[60px] w-full h-full text-white'>
        <h1>Dashboard</h1>
        {process.env.GOOGLE_CLIENT_ID}
        </div>
       
    </div>
  )
}

export default Page