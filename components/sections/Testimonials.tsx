"use client";
import { Card } from '../ui/card';
import React from 'react'
import {motion} from 'framer-motion'
import { QuoteIcon } from 'lucide-react';
import { testimonials } from '@/constants';
import Image from 'next/image';
const Testimonials = () => {
  return (
    <section id='testimonials' className='container mx-auto px-4 py-20'><h2 className='text-3xl text-center mb-12 font-bold'>Client <span className='text-yellow-300'>Testimonials</span></h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
        testimonials.map((testimonials,index)=>(
            <motion.div
            key={testimonials.name}
            initial={{opacity:0 ,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5,delay:index*0.1}}>
                <Card className='p-6 h-full flex flex-col'>
                    <div className='mb-6'><QuoteIcon className='w-8 h-8 text-yellow-300 opacity-55'/></div>
                    <p className='text-zinc-400 mb-6 flex-groq'>{testimonials.content}</p>
                    <div className='flex items-center gap-4'>
                        <Image 
                        src={testimonials.image}
                        alt={testimonials.name}
                        height={50}
                        width={50}
                        className='rounded-full'/>
                    </div>
                    <div>
                        <h4 className='font-semibold text-yellow-300'>{testimonials.name}</h4>
                        <p className='text-sm text-zinc-400'>{testimonials.role}</p>
                    </div>
                </Card>

            </motion.div>
        ))
}
</div>
    </section>
  )
}

export default Testimonials