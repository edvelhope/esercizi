import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ShowGithubUser() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={user.login} width={100} />
      <p>{user.bio}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repos: {user.public_repos}</p>
    </div>
  );
}
