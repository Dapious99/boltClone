import React from 'react'
import Card from './Card'
import rides from '../../assets/rides.png'
import food from '../../assets/food.png'
import micro from '../../assets/micromobility.png'
import business from '../../assets/business.png'
import delivery from '../../assets/delivery.png'
import carSharing from '../../assets/carSharing.png'

const CardRend = () => {
  return (
    <div className='lg:grid lg:grid-cols-3 grid grid-cols-2 gap-x-5 gap-y-4 md:gap-x-0'>
        <Card 
        header = 'Rides'
        description = 'Requests in seconds, ride in minutes.'
        image = {rides}
        />
        <Card 
        header = 'Delivery'
        description = 'Your favourite food, delivered fast.'
        image = {delivery}
        />
        <Card 
        header = 'Groceries'
        description = 'All the essentials whenever you need them.'
        image = {food}
        />
        <Card 
        header = 'Car-sharing'
        description = 'High quality car rental made easy.'
        image = {carSharing}
        />
        <Card 
        header = 'Micromobility'
        description = '2-wheel ride rental at your fingertips.'
        image = {micro}
        />
        <Card 
        header = 'Business'
        description = 'Manage businees travel for your team and clients.'
        image = {business}
        />
    </div>
  )
}

export default CardRend