import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h2>About</h2>
      <Link to="/">Go to Home</Link>
      <Link to="/contact">Go to Contact</Link>
    </>
  );
}