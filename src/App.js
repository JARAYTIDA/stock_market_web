import React from 'react'
import {Route, Routes} from 'react-router-dom'

import {Navbar, Footer} from './components'
import {Home, Equity, Commodity, Debt, ContactUs, AboutUs, PrivacyPolicy} from './pages'

const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path = "/" exact element = {<Home/>} />
                <Route path = "/commodity" element = {<Commodity/>} />
                <Route path = "/equity" element = {<Equity/>} />
                <Route path = "/debt" element = {<Debt/>} />
                <Route path = "/about-us" element = {<AboutUs/>} />
                <Route path = "/contact-us" element = {<ContactUs/>} />
                <Route path = "/privacy-policy" element = {<PrivacyPolicy/>} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default App