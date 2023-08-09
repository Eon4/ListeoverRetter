import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ShowFood } from './components/livretter'

function App() {
  
  const nameArray = [
    {name: "Grillkylling med pomfritter"},
    {name: "Italiensk pizza"},
    {name: "Græsk salat med feta ost og tzatziki"}
  ]

  return (
    <>
      {nameArray.map((item, index) => {
        return (
          <ShowFood key={index} name={item.name} />
        )
      })}
    </>
  )
}

export default App