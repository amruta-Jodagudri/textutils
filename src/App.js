import './App.css';
import About from './components/About';
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  //  const [alert, setAlert] = useState(null);
  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg : message,
  //     type : type
  //   })
  // }

  const togglemode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#274077'
      // showAlert("Dark mode has been enabled","success")
      document.title = "TextUtils - Dark mode"
      //for Text blinking in title.......
      // setInterval(() => {
      //   document.title = "Install TextUtils"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing"
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      // showAlert("Light mode has been enabled","success")
      document.title = "TextUtils - Light mode"
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" AboutText="About" Home="Home" mode={mode} togglemode={togglemode}/>
    {/* <Navbar title="TextUtils" Home="Home" mode={mode} togglemode={togglemode}/> */}
    {/* <Alert alert={alert}/> */}
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Enter your text to analyze" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
