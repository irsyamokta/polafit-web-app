import { Routes, Route } from 'react-router'
import Homepage from "./pages/Homepage.tsx"
import ExerciseRecomendation from './pages/ExerciseRecomendation.tsx'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/rekomendasi-olahraga' element={<ExerciseRecomendation/>}/>
      </Routes>
    </>
  )
}

export default App
