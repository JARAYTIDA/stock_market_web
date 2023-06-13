import React from 'react'
import logo from './market_1.png'

const Home = () => {
    return (
        <div className='bg-yellow-200'>
            <div>
                <img src={logo} alt="graph" style={{width:"full"}}/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='justify-center font-bold text-6xl my-6'>What will you find here</div>
                <div className='box-content w-128'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quod, magnam eius tenetur aspernatur impedit nulla. Praesentium dicta id officiis enim perferendis fuga labore magni soluta ipsam accusantium. Incidunt quis reprehenderit voluptatum fugiat dolores? Porro culpa magni repellendus incidunt dignissimos error ratione earum quidem aliquam veritatis ad, atque molestiae aspernatur.
                </div>
            </div>
        </div>
    )
}

export default Home