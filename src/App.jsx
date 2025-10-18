import React from 'react'
import './App.css'
import Header from './Components/Header/Header';
import HeroSection from './Components/Home/Hero';
import Home from './Components/Home/Home';
import ProductivityLanding from './Components/ProductivityLanding/ProductivityLanding';
import StreamlinedManagement from './Components/Stream/Stream';
import Subscription from './Components/Subscription/Subscription';
import Testimonials from './Components/Testimonials/Testimonials';
import SignUpCTA from './Components/SignUp/SignUp';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="app h-full flex flex-col items-center justify-center px-0  mx-0 w-full overflow-x-hidden">
      <Header />
      <Home />
      <ProductivityLanding />
      <StreamlinedManagement />
      <Subscription />
      <Testimonials />
      <SignUpCTA />
      <Footer />
    </div>
  )
}

export default App