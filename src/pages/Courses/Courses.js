import React from 'react'
import './Courses.css'
import ai from '../../assets/img/ai.png'
import dg from '../../assets/img/dg.png'
import hacker from '../../assets/img/hacking.png'
import sd from '../../assets/img/sd.png'

function Courses() {
  const courseData=[
    {
      title:"AI DEVELOPMENT",
      desc:"Master AI Development",
      img:ai,
    },
     {
      title:"DIGITAL MARKETING",
      desc:"Master Digital Marketing",
      img:dg,
    },
     {
      title:"CYBER SECURITY",
      desc:"Master Cyber Security",
      img:hacker,
    },
     {
      title:"SOFTWARE DEVELOPMENT",
      desc:"Master Software Development",
      img:sd,
    },
  ]
  return (
    
    <div className="container course_container">
        <div className="course-top">
            <h2 className="section_title">Our Free Courses</h2>
<p>The Top Trending Free Courses with Free Certificates</p>
<div className="course-wrapper">
  {courseData.map((item,index)=>(
     <div className="course-item" key={index}>
    <span className='course-icon'>
      <img src={item.img} alt="" />
    </span>
    <div className="course-content">
      <h4>{item.title}</h4>
      <p>{item.desc}</p>
    </div>

  </div>
    
  ))}
 
</div>

        </div>
    </div>
  )
}

export default Courses