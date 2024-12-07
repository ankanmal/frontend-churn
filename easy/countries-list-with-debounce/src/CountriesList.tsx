import React, { useEffect, useState } from 'react';

const useDebouncedValue = (value,delay) =>{
  const [debouncedValue,setDebouncedValue] =useState<string>('');
    useEffect(()=>{
      const timer = setTimeout(()=>{
        setDebouncedValue(value)
      },delay)

      return ()=>{
        clearInterval(timer)
      }
    },[value, delay])

    return debouncedValue
}

const CountriesList = () => {
  const [country, setCountry] = useState('');
  const [countriesList, setCountriesList] = useState({})
  const debounced = useDebouncedValue(country,500)
  const [myList, setMyList]=useState([])
  const api = `https://algochurn-server.onrender.com/practice/countries/${debounced}`
  const apiCalls = async()=>{
    const data = await fetch(api);
    const json = await data.json()
    setCountriesList(json)
  }
  useEffect(()=>{
    if(debounced.length > 2){
      apiCalls()
    }

  },[debounced])
  const handleMyList = (value)=>{
      setMyList((prev)=> [...prev,value])
  }

  return <div>

    <div>
      <input type="text" onChange={(e)=>setCountry(e.target.value)} />

      {
       countriesList && Object.keys(countriesList).length > 0 ?  countriesList.countries.map((value, index)=>{
        return <button value={value} onClick={()=>handleMyList(value)}>{value}</button>
      }): ''}
    </div>
    <div>
      <h4>My List</h4>
      {myList.length > 0 ? (
       myList.map((value,index)=>(<p key={index}>{value}</p>))
      ):''}
    </div>

  </div>;
};

export default CountriesList;
