import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <Link to="/about">Go to About</Link>
      <Link to="/contact">Go to Contact</Link>
    </>
  );
}