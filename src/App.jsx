import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<MovieDetails/>}/>
    </Routes>
      
    </BrowserRouter>
    
  )
}

export default App
