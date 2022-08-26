import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./componentes-css/App.css";
import { List } from "./pages/List";
import Movies from "./pages/Movies";
import Principal from "./pages/Principal";
import Television from "./pages/Television";
import { Tv } from "./pages/Tv";
import { Tvlistado } from "./pages/Tvlistado";
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
          <Route path="/tv/:id" element={<Television />}></Route>
          <Route path="/tv" element={<Tv />}></Route>
          <Route path="/tvList" element={<Tvlistado />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
