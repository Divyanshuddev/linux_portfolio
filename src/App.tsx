import { Stack } from "@mui/material"
import Loader from "./components/Loader/Loader"
import { useEffect, useState } from "react"
import Linux from "./components/Linux/Linux"

function App() {
  const [loading,setLoading] = useState<boolean>(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[loading])
  return (
    <Stack>
      {
        loading?(
          <Loader />
        ):(
          <Linux />
        )
      }
      
    </Stack>
  )
}
export default App
