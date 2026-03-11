import './App.css'
import Footer from './Footer'
import FooterAbove from './FooterAbove'
import Home from './Home'
import HomeMidsec from './HomeMidsec'
import About from './About'
import NavBar from './NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Services'
import Contact from './Contact'
import Programs from './Programs'



function App() {
  

  return (
    <>
      {/* <Home/>
      <HomeMidsec/>
      <FooterAbove/>
      <Footer/>
      <About/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Services/>}/>
          <Route path='/programs' element={<Programs/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
