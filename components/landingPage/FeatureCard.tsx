import Image from 'next/image'
import React from 'react'


interface FeatureCardProps {
    title: string
    desc: string
    image: string
    index: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc, image,index }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full  bg-cardBackground h-[340px]  rounded-lg py-[30px] px-[20px] shadow-md hover:scale-[1.02] duration-500">
            <Image  priority={index === 0} width={150} height={150} src={image} alt="icon" className=" w-[150px] h-[150px] rounded-full object-cover" />
            <h1 className="text-2xl font-bold mt-2 font-carme text-textColorSecondary">{title}</h1>
            <p className="text-center mt-2 leading-[1.3] font-carme text-white">{desc}</p>
        </div>
    )
}
export default FeatureCard