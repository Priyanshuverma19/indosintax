import React from 'react'

const ServiceCard = ({content,title,img}) => {
  return (
    <div className="flex justify-between flex-col px-5 py-12 rounded-[20px]  max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
       <img src={img} alt="double_quotes" className="w-full h-[150px] object-cover rounded-t-lg" />
         <h4 className="font-poppins font-semibold text-[25px] leading-[32px] text-white mt-8">
            {title}</h4>
       
       <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white mt-4">
         {content}
       </p>
   
       
     </div>
  )
}

export default ServiceCard