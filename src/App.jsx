import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./componentes-css/App.css";
import { List } from "./pages/List";
import Movies from "./pages/Movies";
import Principal from "./pages/Principal";
import { Types } from "./pages/Types";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />}></Route>
          <Route path="/types" element={<Types />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/movies/:id" element={<Movies />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
