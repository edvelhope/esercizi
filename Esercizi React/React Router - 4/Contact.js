import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <Link to="/about">Go to About</Link>
      <Link to="/">Go to Home</Link>
    </>
  );
}