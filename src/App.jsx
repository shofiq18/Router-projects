import DaisyNav from './components/DaisyNav'

import NavBar from './components/NavBar'
import './App.css'
import PriceOptions from './components/PriceOptions/PriceOptions'


function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      
      
      <h1 className='bg-red-600 font-bold text-6xl'>Vite + React</h1>
      
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
