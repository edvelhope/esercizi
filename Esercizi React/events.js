export function Button({label, onClick}) {
    return <button onClick={onClick}>{label}</button>
}

import { Button } from "./Button";

export function AlertClock({}) {
  function handleShowTime() {
    const now = new Date();

    alert(`The current time is ${now.toLocaleTimeString()}`);
  }

  return (
    <div>
      <Button onClick={handleShowTime} label="Click me!" />
    </div>
  );
}

import { AlertClock } from "./AlertClock";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <h1>My Awesome App</h1>
      <hr />
      <HelloWorld />
      <Welcome name={<strong>World</strong>} age="19" />
      <AlertClock />
    </div>
  );
}