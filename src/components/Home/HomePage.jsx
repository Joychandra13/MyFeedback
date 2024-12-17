import React from 'react'
import IconSection from './IconSection'
import Carousel from './Carousel'
import CardSection from './CardSection'
import Resources from './Resources'
import ReviewCarousel from './ReviewCarousel'

function HomePage() {
  return (
    <div>
        <IconSection/>
        <Carousel/>
        <CardSection/>
        <Resources/>
        <ReviewCarousel/>
    </div>
  )
}

export default HomePage