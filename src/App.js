import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";




function App(props) {
  const [mode, setMode] = useState('light');
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const enableDarkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setbtnText('Enable light mode')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enable", "success")
      document.title = "Text-utils - Dark Mode"
    }
    else {
      setMode('light')
      setbtnText('Enable dark mode')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
      document.title = "Text-utils - Light Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} enableDarkMode={enableDarkMode} btnText={btnText} />
        <Alert alert={alert} />
        <div className="container my-3 " >
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below:" mode={mode} />} />
          </Routes>

        </div>
      </Router>



    </>
  );
}

export default App;
