import React from 'react'
import forest from '../assets/forest.jpg'

const Explore = () => {
  return (
    <section className=' w-full h-full flex flex-col items-center text-white pt-[50px] overflow-scroll '>

      <span className=' text-2xl' >Explore The World</span>

      <div className=' mt-[50px] flex flex-wrap justify-center gap-4 px-8 '>

        <div className=' card w-[300px] h-[350px] border border-amber-300 rounded-lg overflow-hidden '>
          <div className=' w-full h-[60%] overflow-hidden '>
            <img src={forest} alt='city' />
          </div>
          <div className=' w-full h-[40%] p-3'>
            <p className=' text-sm pb-1'>City Name, Country Name </p>
            <p className=' text-lg font-semibold pb-2'>Descripiton Will Be Here</p>
            <hr />
            <p className=' line-through text-gray-400 pt-1'>Was $1500</p>
            <p className=' text-lg'>From $1350</p>
          </div>
        </div>

        <div className=' card w-[300px] h-[350px] border border-amber-300 rounded-lg overflow-hidden '>
          <div className=' w-full h-[60%] overflow-hidden '>
            <img src={forest} alt='city' />
          </div>
          <div className=' w-full h-[40%] p-3'>
            <p className=' text-sm pb-1'>City Name, Country Name </p>
            <p className=' text-lg font-semibold pb-2'>Descripiton Will Be Here</p>
            <hr />
            <p className=' line-through text-gray-400 pt-1'>Was $1500</p>
            <p className=' text-lg'>From $1350</p>
          </div>
        </div>

        <div className=' card w-[300px] h-[350px] border border-amber-300 rounded-lg overflow-hidden '>
          <div className=' w-full h-[60%] overflow-hidden '>
            <img src={forest} alt='city' />
          </div>
          <div className=' w-full h-[40%] p-3'>
            <p className=' text-sm pb-1'>City Name, Country Name </p>
            <p className=' text-lg font-semibold pb-2'>Descripiton Will Be Here</p>
            <hr />
            <p className=' line-through text-gray-400 pt-1'>Was $1500</p>
            <p className=' text-lg'>From $1350</p>
          </div>
        </div>

        <div className=' card w-[300px] h-[350px] border border-amber-300 rounded-lg overflow-hidden '>
          <div className=' w-full h-[60%] overflow-hidden '>
            <img src={forest} alt='city' />
          </div>
          <div className=' w-full h-[40%] p-3'>
            <p className=' text-sm pb-1'>City Name, Country Name </p>
            <p className=' text-lg font-semibold pb-2'>Descripiton Will Be Here</p>
            <hr />
            <p className=' line-through text-gray-400 pt-1'>Was $1500</p>
            <p className=' text-lg'>From $1350</p>
          </div>
        </div>

        <div className=' card w-[300px] h-[350px] border border-amber-300 rounded-lg overflow-hidden '>
          <div className=' w-full h-[60%] overflow-hidden '>
            <img src={forest} alt='city' />
          </div>
          <div className=' w-full h-[40%] p-3'>
            <p className=' text-sm pb-1'>City Name, Country Name </p>
            <p className=' text-lg font-semibold pb-2'>Descripiton Will Be Here</p>
            <hr />
            <p className=' line-through text-gray-400 pt-1'>Was $1500</p>
            <p className=' text-lg'>From $1350</p>
          </div>
        </div>

        <div className=' card w-[300px] h-[350px] border border-amber-300 rounded-lg overflow-hidden '>
          <div className=' w-full h-[60%] overflow-hidden '>
            <img src={forest} alt='city' />
          </div>
          <div className=' w-full h-[40%] p-3'>
            <p className=' text-sm pb-1'>City Name, Country Name </p>
            <p className=' text-lg font-semibold pb-2'>Descripiton Will Be Here</p>
            <hr />
            <p className=' line-through text-gray-400 pt-1'>Was $1500</p>
            <p className=' text-lg'>From $1350</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Explore
