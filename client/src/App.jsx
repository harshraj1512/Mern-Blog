import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import Project from './Pages/Project'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={< SignIn />} />
      <Route path="/sign-up" element={< SignUp />} />
      <Route path="/dashboard" element={< Dashboard />} />
      <Route path="/project" element={<Project />} />
     </Routes>
    </BrowserRouter>
  )
}
