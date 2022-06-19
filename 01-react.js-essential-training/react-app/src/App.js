import "./App.css";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </>
  );
}
export function About() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="history">History</Link>
      <h1>About</h1>
      <Outlet />
    </>
  );
}
export function Contact() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>Contact</h1>
    </>
  );
}

export function History() {
  return (
    <>
      <h1>Our History</h1>
    </>
  );
}

export function App() {
  return (
    <>
      <Home />
    </>
  );
}
