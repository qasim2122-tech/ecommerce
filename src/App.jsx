import React from 'react'
import Navbar from './Component/Navbar';
import { Route , Routes } from 'react-router-dom';
import Home from './Component/Home';
import Gallery from './Component/Gallery';
import Pricing from './Component/Pricing';
import Team from './Component/Team';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';



const App = () => {
  return (
   <div>
   <Navbar/>
   <Routes>

   <Route path='/home'element={<Home/>}></Route>
   <Route path='/gallery'element={<Gallery/>}></Route>
   <Route path='/pricing'element={<Pricing/>}></Route>
   <Route path='/team'element={<Team/>}></Route>
   <Route path='/testimonial'element={<Testimonial/>}></Route>
   <Route path='/contact'element={<Contact/>}></Route>
   

   </Routes>
    
   
   </div>
  )
}

export default App;