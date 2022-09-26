import "@aws-amplify/ui-react/styles.css"
import "./styles/global.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { LogIn } from "./pages/LogIn"
import { SignUp } from "./pages/SignUp"
import { PrivateRoutes } from "./pages/PrivateRoutes"
import { Notes } from "./pages/Notes"
import { Favourites } from "./pages/Favourites"
import { Notifications } from "./pages/Notifications"
import { Archive } from "./pages/Archive"
import { Editor } from "./pages/Editor"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/editor/:id" element={<Editor />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/archive" element={<Archive />} />
          </Route>
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
