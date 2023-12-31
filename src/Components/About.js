import React from 'react'
import profile from '../assets/profile.png'

import { Styles } from '../utils/Style'
import Resume from '../assets/resume.pdf'
import '../App.css'
import {TiArrowDownOutline} from "react-icons/ti";



function About() {
  return (
    <div className='flex flex-wrap justify-center  items-center   mt-10 p-10  ' id='Home'>
      
      <div className='violet-gradient rounded-full m-2 h-[250px] py-4 mt-10 pr-1  w-[10px] '>
   
   </div>
     <div className=' flex-1 py-4  '>
    
      <span className={Styles.heroHeadText}>
        Hi, I'm <span className='text-orange-600'> John </span>
      </span>
      <br/>
      <span className={Styles.heroSubText}>
        I am a MERN Stack Developer  &

        <br/>
        Web Designer

       

      </span>
<br/>
<div className='w-[14rem]'>


      <a
        href={Resume}
        download="Resume"
        target="_blank"
        rel="noreferrer"
      >
        <div className='p-4 mt-2 w-[13rem]  rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500 '> <TiArrowDownOutline className='text-lg mr-3 mt-1 text-orange-500'> </TiArrowDownOutline> 
        Resume </div>
      </a>
     </div>
     </div>

     <div className='flex flex-wrap'>

    
   
    

<img  className =  'element object-contatin p-4 ' src={profile} alt='images '   />
     

    
     


    

     </div>
</div>

  
  )
}

export default About