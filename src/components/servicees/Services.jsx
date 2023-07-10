import React from 'react'
import CardRend from './CardRend'

const Services = () => {
  return (
    <section className='lg:px-[6.5rem] px-3 py-8 lg:py-[4rem]'>
        <div className='flex flex-col gap-6'>
            <p className='lg:text-center font-semibold lg:text-[3.5rem]'>Our Services</p>
            <CardRend />
        </div>
    </section>
  )
}

export default Services