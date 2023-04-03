import React from 'react'

const LandingPage = () => {
  return (
    <section className=' w-full h-full bg-istanbul_bridge bg-cover bg-center flex flex-col justify-around items-center'>
      <div className=' text-center leading-[30px] '>
      <p className=' text-white text-[30px] font-semibold' >Flight and Travel Experince Unlike The Rest</p><br/>
      <p className=' text-2xl text-amber-300' >SkyScape unique and luxurious <br/> Flight</p>
      </div>
      

      {/* card */}
      <div className=' w-[80%] h-[80px] max-w-[1000px] bg-black text-amber-300 flex justify-between border border-amber-500 rounded-md'>
        <div className=' w-full flex items-end justify-center h-full text-[18px] px-4  '>
            <input className=' w-full bg-transparent outline-none flex items-end placeholder-amber-300 h-full capitalize ' type='tel' placeholder=' Departure' />
        </div>
        <div className=' w-full flex items-end justify-center h-full text-[18px] px-4  '>
            <input className=' w-full bg-transparent outline-none flex items-end placeholder-amber-300 h-full capitalize ' type='tel' placeholder=' Destination' />
        </div>
        <div className=' w-full flex items-end justify-center h-full text-[18px] px-4  '>
            <input className=' w-full bg-transparent outline-none flex h-full capitalize ' type='date' placeholder=' Departure date' />
        </div>
        <div className=' w-full flex items-end justify-center h-full text-[18px] px-4  '>
            <input className=' w-full bg-transparent outline-none flex h-full capitalize ' type='date' placeholder=' Returning dat' />
        </div>
      </div>
    </section>
  )
}

export default LandingPage
