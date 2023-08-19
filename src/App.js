import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from "./context/Notes/NoteState";
import Alert from './components/Alert'



function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar></Navbar>
          <Alert message={'This is amazing'}></Alert>
          <div className="container">
            <Routes>
              <Route exact path="/about" element={<About />} />

              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
