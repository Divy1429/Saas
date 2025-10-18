import React from 'react'
import HeroSection from './Hero';
import InfiniteScroll from './../Infinite/Infinite';

const Home = () => {
  return (
    <div className='w-full h-full overflow-hidden'>
      <HeroSection />
      <InfiniteScroll />
    </div>
  )
}

export default Home