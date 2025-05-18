import{ createContext, useEffect, useState } from 'react'
import App from '../App'
import { jobsData } from '../assets/assets'

export const AppContext = createContext()

export const AppContextProvider = (props) => {

  const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: '',
    })

    const [isSearched, setIsSearched] = useState(false)

    const [jobs,setJobs]=useState([]);

    // function to fetech jobs
    const  fetechJobs=async()=>{
      setJobs(jobsData);
    }

    useEffect(() => {
      fetechJobs()

    }, [])
    
    
    const value={
        setSearchFilter,searchFilter,
        isSearched, setIsSearched,
        jobs,setJobs,
    }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
