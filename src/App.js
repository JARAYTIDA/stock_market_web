import React from 'react'
import {Route, Routes} from 'react-router-dom'

import {Navbar} from './components'
import {Home, Equity, Commodity, Debt} from './pages'

const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path = "/" exact element = {<Home/>} />
                <Route path = "/commodity" element = {<Commodity/>} />
                <Route path = "/equity" element = {<Equity/>} />
                <Route path = "/debt" element = {<Debt/>} />
            </Routes>
        </div>
    )
}

export default App