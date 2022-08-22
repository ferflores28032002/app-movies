import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./componentes-css/App.css";
import { List } from "./pages/List";
import Movies from "./pages/Movies";
import Principal from "./pages/Principal";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} ></Route>
          <Route path="/movies/:id" element={<Movies/>} ></Route>
          <Route path="/list" element={<List/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
