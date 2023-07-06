import React from 'react'
import logo from '../images/Mutual.jpg'

const BlogBox_1 = () => {
    return (
        <div className='hover:-translate-y-1 hover:scale-110 text-gray-500 duration-300 bg-[#0a192f] hover:bg-black hover:text-white hover:rounded-lg rounded-lg mr-3 ml-3 mb-6'>
            <div className='flex flex-col justify-between rounded-lg' style={{width:"400px", height:"400px"}}>
                <div className='' style={{width:"400px", height:"200px"}}>
                    <img src={logo} alt="equity" className='overflow-hidden object-cover rounded-l-lg w-full h-80' />
                </div>
                <div className='text-center backdrop-filter backdrop-blur-lg  z-50 backdrop-opacity-90'>
                    <h1 className='bold underline my-3 text-5xl overflow-hidden'>Headline</h1>
                    <p className='my-6 overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id eos blanditiis, vitae nihil saepe accusamus mollitia amet sit amet consectetur adipisicing elit. Rem id eos blanditiis, vitae nihil saepe accusamus mollitia amet sit amet consectetur adipisicing elit. Rem id eos blanditiis, vitae nihil saepe accusamus mollitia amet </p>
                </div>
            </div>
        </div>

        // <div className='relative mr-3 ml-3 mb-11' style={{width:"370px", height:"220px"}} >
        //     <img src={logo} alt="News Image" class="object-cover" style={{width:"370px", height:"220px"}} />
            
        //     <div class="absolute inset-0 flex justify-center">
        //         <h2 class="text-white text-2xl font-bold text-center">Your News Headline</h2>
        //     </div>
        // </div>
    )
}

export default BlogBox_1