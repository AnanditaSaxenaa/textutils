
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#01265c'
      showAlert("Dark Mode has been enabled", "success")
      document.title = 'Textutils - dark mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
      document.title = 'Textutils - light mode'
    }
    
  }
  return (
<>
  <Router>
    <Navbar title="textUtils" about="About us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3" style={{ color: "black" }}>
      <Routes>
        {/* Use 'element' prop for Route */}
        <Route exact path="/about" element={<About />} />
        <Route
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze"
              mode={mode}
            />
          }
        />
      </Routes>
      {/* <About/> */}
    </div>
  </Router>
</>

  );
}

export default App;
