import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  return (
    <>
      <Router>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route
              path="/settings"
              element={
                <Settings
                  primaryColor={primaryColor}
                  setPrimaryColor={setPrimaryColor}
                  fontSize={fontSize}
                  setFontSize={setFontSize}
                  animationSpeed={animationSpeed}
                  setAnimationSpeed={setAnimationSpeed}
                />
              }
            />
            {/* <Route path="/recipes/:recipeName" element={<RecipeDetails/>} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom"

// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer";
// import { useState,useEffect } from 'react'

// import Home from "./pages/Home";
// import Recipes from "./pages/Recipes";
// import Settings from "./pages/Settings";

// function App() {

//   return (
//     <>
//     <Router>
//       <Navbar />
//       <div className="container main">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/recipes" element={<Recipes />} />
//           <Route path="/settings" element={<Settings/>} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//     </>
//   )
// }

// export default App;
