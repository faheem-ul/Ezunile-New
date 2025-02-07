import React from 'react'
import Image from 'next/image'

import bg from "@/public/images/home/herobg.png"
import waterimg from "@/public/images/home/water.png"
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'

const HeroHome = () => {
  return (
    <div className='relative h-screen flex justify-center items-center overflow-hidden '>
        <Image className='absolute object-cover object-center w-full h-full' src={bg} alt="" width={1440} height={1138} />
        <Image className='absolute right-0 z-10 w-[40%]' src={waterimg} alt="" width={658.71} height={1254.77} />
        <div className='absolute object-cover object-center w-full h-full bg-black/50' > </div>
        <div className="w-full max-w-[1200px] relative z-10 space-y-[50px]">
          <Text as='h1' className='max-w-[709px]'>My purpose in life is alleviating global water scarcity.</Text>
          <Button className='max-w-[216px]'>Learn More</Button>
        </div>
    </div>
  )
}

export default HeroHome
