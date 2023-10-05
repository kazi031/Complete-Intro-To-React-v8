// import React from "react";
import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     animal: "Dog",
  //     name: "Luna",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Bird",
  //     name: "Pepper",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Cat",
  //     name: "Doink",
  //     breed: "Mixed",
  //   }),
  // ]);
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
