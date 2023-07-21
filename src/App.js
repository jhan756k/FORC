import React from "react";
import Mainpage from "./Page/Mainpage";
import Aboutpage from "./Page/Aboutpage";
import Loginpage from "./Page/Loginpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/join" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
