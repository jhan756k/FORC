import React from "react";
import Mainpage from "./Page/Mainpage";
import Aboutpage from "./Page/Aboutpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
