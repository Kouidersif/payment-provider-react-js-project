import React from 'react';
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({title, content, icon, idx}) =>(
    <div className={`flex flex-row 
    p-6 rounded-[20px]
    ${ idx !== features.length - 1 ?
    "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] 
      rounded-full 
      ${styles.flexCenter} bg-dimBlue `}>
        <img src={icon} alt="icon" 
        className='w-[50%] 
        h-[50%] 
        object-contain' />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className='font-poppins 
        font-semibold 
        text-white text-[18px] 
        leading-[23px] mb-1'>{title}</h4>
        <p className='font-poppins 
        font-normal 
        text-dimWhite text-[16px] 
        leading-[24px] mb-1'>{content}</p>
      </div>
    </div>
)




const Business = () => (
  <section id='features' className={layout.section}> 
  <div className={`${layout.sectionInfo}`}>
    <h2 className={styles.heading2}>Lorem ipsum dolor sit amet <br className='sm:block hidden' />
          Lorem, ipsum dolor.</h2>
    <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
      Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. 
      Dolore natus deleniti ipsum quidem 
      ratione suscipit molestias dolorum 
      hic sapiente quaerat?
    </p>
    <Button styles="mt-10" />

  </div>

  <div className={`${layout.sectionImg} flex-col`}>
    {
      features.map((feature, idx)=>(
        <FeatureCard key={feature.id} {...feature}  idx={idx} />
      ))
    }

  </div>

  </section>
)
export default Business