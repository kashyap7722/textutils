import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
// import About from "./components/About"
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
function App() {
  // by default in mode var light color of navbar will store, setMode() will update to dark when it is light and also change background color to grey using togglemode() else part it will be reverse..
  // we can apply above to components using literals
  // we can use mode varaible and toggleMode() any componenets
  const [mode, setMode] = useState("light");
  // adding another state for alert. by default it has null value. we can update it usng setAlert..
  // when showAlert() will call ,it will update value of alert using setAlert()
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      // in type,it will be success,danger,primary that type of alert comes
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'white') {
      setMode("dark");
      
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has enabled", "danger");
      document.title="TextUtils-Dark Mode";
      // setInterval(() => {
      //     document.title="This is Dark mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now";
      // }, 1500);

    }
    else {
      setMode("white");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has enabled", "primary");
      document.title="TextUtils-Light Mode";
      // setInterval(() => {
      //   document.title="Install TextUtils Now";
      // }, 1500);
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
      {/* <Navbar title="Textutils"  /> */}
      <Navbar title="TextUtils" aboutTextutils="About Us" mode={mode} toggleMode={toggleMode} />
      {/* whatever store in alert variable,it will come here and shows it using ALert in app */}
      <Alert alert={alert} />
    
      <div className="container my-3">
      {/* <Switch> */}
          {/* suppose, if you set /users for component 1 and /users/home for component 2 and if you donot specify exact keyword with path then react will not understand diffrence b/w /users and /users/home. it will open 1st component evenif you click on 2nd path which is /users/home
           */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter Text To Analyze" mode={mode} />
          {/* </Route> */}
          
        {/* </Switch> */}
       
      </div>
      {/* </BrowserRouter> */}
      </>
  );
}
export default App;
