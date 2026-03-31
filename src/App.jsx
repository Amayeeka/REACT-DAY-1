// App.jsx — Day 1 Exercises
// Exercise 2: Title changed from "Vite + React" to "Hello World"

import ReactWebsites from "./components/PopularSites";
import Dummy from "./components/Dummy";
import CurrentYear from "./components/CurrentYearComp";
import Header from "./components/Header";

export default function App() {
  return (
    <div>

      <Header />

      <h1>Hello World</h1>        {/* Exercise 2: Changed title */}

      <hr />

      <h2>Introduction to React</h2>
      <ReactWebsites />

      <hr />

      <h2>Dummy Data</h2>
      <Dummy />

      <hr />

      <h2>JSX & Current Year</h2>
      <CurrentYear />


    </div>
  );
}