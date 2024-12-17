import './App.css'

import Footer from './components/Footer'
import CardSection from './components/Home/CardSection'
import Carousel from './components/Home/Carousel'
import IconSection from './components/Home/IconSection'
import Resources from './components/Home/Resources'
import ReviewCarousel from './components/Home/ReviewCarousel'
import Nevbar from './components/Nevbar'




function App() {
  return (
    <>
    <Nevbar/>
    <IconSection/>
    <Carousel/>
    <CardSection/>
    <Resources/>
    <ReviewCarousel/>
    <Footer/>
    </>
  )
}

export default App
