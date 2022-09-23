import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import TablePage from "./pages/TablePage"
import ProojectId from "./pages/ProjectIdPage"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TablePage />}/>
        <Route path="/project/:id" element={<ProojectId />}/>
      </Routes>
    </Router>
  );
}

export default App;
