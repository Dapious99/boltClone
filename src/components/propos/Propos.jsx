import React from 'react'
import world from '../../assets/map.svg'

const Propos = () => {
  return (
    <section className='bg-gray-100 lg:px-[6.5rem] px-3 py-8 lg:py-[4rem]'>
        <div className=''>
            <div className='text-center'>
                <p className='pt-7 font-semibold text-[3rem]'>A propos</p>
                <p className='py-4 px-[10rem] font-normal text-[1.4rem] leading-tight'>Bolt is the first European mobility super-app. We’re making cities for people, offering better alternatives for every purpose a private car serves — including ride-hailing, shared cars, scooters, and food and grocery delivery.</p>
            </div>
            <div>
                <img src={world}/>
            </div>
            <div></div>
            <div></div>
        </div>
    </section>
  )
}

export default Propos