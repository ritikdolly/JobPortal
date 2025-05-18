import React from 'react'
import { assets } from '../assets/assets'

export const TrustedImg = () => {
  return (
    <div className='flex justify-center gap-10 lg-gap-16 flex-wrap'>
                <p className='font-medium'>Trusted by</p>
                <img className='h-6' src={assets.microsoft_logo} alt="microsoft" />
                <img className='h-6' src={assets.walmart_logo} alt="walmart" />
                <img className='h-6' src={assets.accenture_logo} alt="accenture" />
                <img className='h-6' src={assets.samsung_logo} alt="samsung" />
                <img className='h-6' src={assets.amazon_logo} alt="amazon" />
                <img className='h-6' src={assets.adobe_logo} alt="adobe" />
            </div>
  )
}
