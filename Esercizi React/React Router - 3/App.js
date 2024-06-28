import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowGithubUser from "./assets/componets/ShowGithubUser";
import Welcome from "./assets/componets/Welcome";

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = `/users/${inputValue}`;
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Welcome
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;