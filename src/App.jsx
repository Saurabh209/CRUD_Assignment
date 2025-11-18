import './App.css'
import SpotlightCard from '../ReactBitsComponents/SpotlightCard/SpotlightCard'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Users from './Users'
import Nav from './Nav'
import { Context } from './main'
import ShinyText from '../ReactBitsComponents/ShinyText'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'

function App() {

  const { loading, allUsers, setAllUsers, setLoading,reloadUsers } = useContext(Context)



  useEffect(() => {
    setLoading(true);
    axios
      .get(`/get/FakeUsers`, {
        withCredentials: true,
      })
      .then((res) => {
        setAllUsers(res.data.data);
      })
      .catch((err) => {
        if (err.name !== "CanceledError") {
          console.log("Error fetching:", err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {

    };
  }, [reloadUsers]);


  if (loading) {
    return (
      <div className="loading-screen">
        <ShinyText
          text={`Verifying session...`}
          disabled={false}
          speed={3}
          className='custom-class'
        />
      </div>
    )
  }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>

    </>
  )
}

export default App
