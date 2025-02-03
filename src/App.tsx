import { Routes, Route } from 'react-router'
import Navbar from "./components/Partials/Navbar.tsx"
import Homepage from "./pages/Homepage.tsx"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </>
  )
}

export default App
