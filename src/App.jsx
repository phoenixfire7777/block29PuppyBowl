import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { NewplayerForm,AllPlayers, SinglePlayer} from "./components/index";
import './App.css'



function App() {

  return (
    <div id="main-section">
      <h1>Puppy Bowl</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/NewplayerForm" element={<NewplayerForm />} />
        <Route path="/SinglePlayer" element={<SinglePlayer />} />
      </Routes>
    </div>
  )
}

export default App
