import React from 'react'
import Hero from './Hero'
import GallerySection from './GallerySection'
import ContactInformation from './ContactInformation'
import RatingSection from './RatingSection'
import ReviewSection from './Reviews'
import Discover from './Discover'

function BellaItalia() {
  return (
    <>
    <Hero/>
    <div className='p-2'>
    <GallerySection/>
    <ContactInformation/>
    <RatingSection/>
    <ReviewSection/>
    <Discover/>
    </div>
    </>
  )
}

export default BellaItalia