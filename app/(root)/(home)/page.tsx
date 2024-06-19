import MeatingTypeList from '@/components/MeatingTypeList';
import React from 'react'

const Home = () => {

  const now = new Date();
const timeInSriLanka = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Colombo' });
console.log(timeInSriLanka);

  const date = '';

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
  <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
   <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
    <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meating at:{timeInSriLanka}</h2>
    <div className='flex flex-col gap-2'>
      <h1 className='text-4xl font-extralight lg:text-7xl'>11.30AM</h1>
      <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
    </div>
   </div>
  </div>

  <MeatingTypeList />
    </section>
  )
}

export default Home