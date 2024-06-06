import { useState, useRef, useEffect } from "react";
import { CounterDisplay } from "./CounterDispay";

export function Counter({ initialValue = 0, incrementBy = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);
  const prevDirectionRef = useRef(null);

  function handleIncrement() {
    setCounter((c) => {
      const newCounter = c + incrementBy;
      updateDirection(newCounter, c);
      return newCounter;
    });
  }

  function handleDecrement() {
    setCounter((c) => {
      const newCounter = c - incrementBy;
      updateDirection(newCounter, c);
      return newCounter;
    });
  }

  function handleReset() {
    setCounter(initialValue);
  }

  function updateDirection(newCounter, previousCounter) {
    if (newCounter > previousCounter) {
      directionRef.current = "up";
    } else if (newCounter < previousCounter) {
      directionRef.current = "down";
    } else {
      directionRef.current = "none";
    }

    if (directionRef.current !== prevDirectionRef.current) {
      console.log(directionRef.current);
      prevDirectionRef.current = directionRef.current;
    }
  }

  useEffect(() => {
    prevDirectionRef.current = directionRef.current;
  }, []);

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
