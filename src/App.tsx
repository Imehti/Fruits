import axios from "axios"
import { useEffect } from "react"
import SearchBox from "./components/SearchBox"

function App(){

  // useEffect(()=>{
  //   axios
  //   .get('https://www.fruityvice.com/api/fruit/all')
  //   .then(res=>console.log(res.data))
  // },[])


  return (
    <>
    <SearchBox />
    </>
  )
}

export default App