import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'

import { SliderData } from './components/SliderData'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home slides={SliderData} />} />
      </Routes>
    </div>
  )
}

export default App
