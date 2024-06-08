import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const language = useContext(LanguageContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>
        {language === "en"
          ? `Current time: ${date.toLocaleTimeString()}`
          : `Ora attuale: ${date.toLocaleTimeString()}`}
      </h2>
    </div>
  );
}
