import { createContext, StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ClickSpark from '../ReactBitsComponents/ClickSpark/ClickSpark.jsx'
import axios from 'axios'





export const Context = createContext();

const AppWrapper = () => {
  const [loading, setLoading] = useState(false)
  const [allUsers, setAllUsers] = useState([])
  const [reloadUsers,setReloadUsers] = useState(false)

 



  return (
    <Context.Provider value={{
      loading, setLoading, allUsers,setAllUsers,reloadUsers,setReloadUsers
    }}>
      <ClickSpark sparkColor='#565656ff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}>
        <App />
      </ClickSpark>
    </Context.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </StrictMode>,
)
