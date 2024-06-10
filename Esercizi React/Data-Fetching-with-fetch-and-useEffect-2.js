import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [usernames, setUsernames] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setUsernames((prevUsernames) => [...prevUsernames, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {usernames.map((username, index) => (
          <GithubUser key={index} username={username} />
        ))}
      </div>
    </div>
  );
}
