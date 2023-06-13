import React from 'react'
import {Link} from 'react-router-dom'
import {FaTwitter} from 'react-icons/fa'
import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'


const Navbar = () => {
    return (
        <div>
            <div className='flex bg-black text-white text-2xl justify-between'>

                <div className='flex mx-6 my-6 font-bold underline text-4xl place-items-center'>
                    <Link to="/">
                        <h1>PRS</h1>
                    </Link>
                </div>
                
                <div className='flex mx-6 my-6 place-items-center'>
                    <Link to="/commodity" className='mx-6'>Commodity</Link>
                    <Link to="/debt" className='mx-6'>Debt</Link>
                    <Link to="/equity" className='mx-6'>Equity</Link>
                </div>

                <div className='flex mx-6 my-6 place-items-center'>
                    <Link to = "https://www.twitter.com/"> <FaTwitter className='mx-3'/> </Link>
                    <Link to = "https://www.instagram.com/"> <AiFillInstagram className='mx-3'/> </Link>
                    <Link to = "https://www.linkedin.com/"> <AiFillLinkedin className='mx-3' /> </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar