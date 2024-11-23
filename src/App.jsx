import React from 'react'
import FetchData from './Components/FetchData'
import FetchYogaData from './Components/FetchYogaData'

function App() {
  return (
    <>
      <h1>Fetch Data</h1>
      <FetchData/>
      <h1> Fetch Yoga Data</h1>
      <FetchYogaData/>
    </>
  )
}

export default App