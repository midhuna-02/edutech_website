import React from 'react'
import './Plans.css'

function Plans() {
    const pricingData=[
        {
            title:'Regular Member',
            price:'$0',
            duration:'/month',
            color:'#fff',
            features:[
                'Unlimited access to the courses',
                'Customer support',
                'Personal Mentor',
                'Standard options',
                '5 classes per week'
            ]
        },
        {
            title:'Premium Member',
            price:'$100',
            duration:'/month',
            color:'#ed3957',
            features:[
                'Unlimited access to the courses',
                'Customer support',
                'Personal Mentor',
                'Standard options',
                '5 classes per week'
            ]
        },
        {
            title:'Standard Member',
            price:'$0',
            duration:'/month',
            color:'#fff',
            features:[
                'Unlimited access to the courses',
                'Customer support',
                'Personal Mentor',
                'Standard options',
                '5 classes per week'
            ]
        },
        
    ]
  return (
    <div className="container">
        <div className="pricing_top">
<h2 className='section_title'>Premium Pricing Plan</h2>
<p>Unlock elite tech services with our premium pricing plan and soar ahead of the competition</p>
        </div>
        <div className="pricing_wrapper">
           { pricingData.map((pricingItem,index)=>(
 <div className="pricing_item" key={index}>
 <div className="pricing_card-top " style={{background:pricingItem.color}}>
<h2 className='section_title'>{pricingItem.title}</h2>
<h2 className='pricing_section_title'>{pricingItem.price}<span>{pricingItem.duration}</span></h2>
 </div>
 <div className="services">
     <ul>
        {pricingItem.features.map((feature,index)=>(
 <li key={index}>{feature}</li>
 
        ))}
        </ul>
        <button className='register-btn'>Join</button>
        

 </div>
</div>
           ))
}
           


        </div>
    </div>
  )
}

export default Plans