import "@aws-amplify/ui-react/styles.css"
import "./styles/global.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { LogIn } from "./pages/LogIn"
import { SignUp } from "./pages/SignUp"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
