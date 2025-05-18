
import { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { TrustedImg } from './TrustedImg'
import { AppContext } from '../context/AppContext'

export const Hero = () => {

    const {setSearchFilter, setIsSearched} = useContext(AppContext);

    const titleRef = useRef(null);
    const locationRef = useRef(null);
    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value,
        })
        setIsSearched(true)
        console.log({title: titleRef.current.value, location: locationRef.current.value});
        titleRef.current.value = '';
        locationRef.current.value = '';
    }


  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
        <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
            <h2 className='text-xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h2>
            <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your Next Big Career Move Starts Roght Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
            <div className='flex items-center justify-between bg-white text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
                <div className='flex items-center'>
                    <img className='h-4 sm:h-5' src={assets.search_icon} alt="searchbar"/>
                    <input type="text"
                    className='max-sm:text-xs p-2 rounded outline-none w-full'
                    name="search"
                    id="search"
                    ref={titleRef}
                    placeholder='Search for jobs'/>
                </div>
                <div className='flex items-center'>
                    <img className='h-4 sm:h-5' src={assets.location_icon} alt="location"/>
                    <input type="text" 
                    className='max-sm:text-xs p-2 rounded outline-none w-full'
                    name="search" id="search"
                    ref={locationRef}
                    placeholder='Location'/>
                </div>
                <button
                onClick={onSearch}
                type='button'
                className='bg-blue-600 px-6 py-2 rounded text-white m-1 '>Search</button>
            </div>
        </div>

        <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
            <TrustedImg/>
        </div>

    </div>
  )
}
