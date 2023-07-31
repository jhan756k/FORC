import React from "react";
import Mainpage from "./Page/Mainpage";
import Aboutpage from "./Page/Aboutpage";
import Loginpage from "./Page/Loginpage";
import Infopage from "./Page/Infopage";
import Newspage from "./Page/Newspage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/join" element={<Loginpage />} />
        <Route path="/info" element={<Infopage />} />
        <Route path="/news" element={<Newspage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
