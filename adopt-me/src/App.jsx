// import React from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import adoptedPetContext from "./adoptedPetContext";
import SearchParams from "./SearchParams";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, //1000*60*10=10mins
      cacheTime: Infinity,
    },
  },
});

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
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <adoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </adoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
