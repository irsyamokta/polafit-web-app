import { Routes, Route } from 'react-router'
import Homepage from "./pages/Homepage.tsx"
import ExerciseRecomendation from './pages/ExerciseRecomendation.tsx'
import NutritionPrediction from './pages/NutritionPrediction.tsx'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/rekomendasi-olahraga' element={<ExerciseRecomendation/>}/>
        <Route path='/cek-nutrisi' element={<NutritionPrediction/>}/>
      </Routes>
    </>
  )
}

export default App
