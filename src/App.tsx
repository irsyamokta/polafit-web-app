import { Routes, Route } from 'react-router'
import Navbar from "./components/Partials/Navbar.tsx"
import Homepage from "./pages/Homepage.tsx"
import ExerciseRecomendation from './pages/ExerciseRecomendation.tsx'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/rekomendasi-olahraga' element={<ExerciseRecomendation/>}/>
      </Routes>
    </>
  )
}

export default App
