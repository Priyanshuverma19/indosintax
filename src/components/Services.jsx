import { services } from "../constants/index.js";
import styles from "../style";
import React from 'react'
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
      Our Services <br className="sm:block hidden" /> 
      Services That We Offer <br className="sm:block hidden" /> 
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quo!
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {services.map((card) => <ServiceCard key={card.id} {...card} />)}
    </div>
  </section>
  )
}

export default Services