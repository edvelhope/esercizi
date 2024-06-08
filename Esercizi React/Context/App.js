import { Clock } from "./Clock";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";

export function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(event) {
    setLanguage(event.target.value);
  }
  return (
    <div>
      <select value={language} onChange={handleSetLanguage}>
        <option value="en">English</option>
        <option value="it">Italian</option>
      </select>
      <Container title={<h1>My Awesome App</h1>}>
        <LanguageContext.Provider value={language}>
          <hr />
          <Clock />
        </LanguageContext.Provider>
      </Container>
    </div>
  );
}
