import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import AboutPage from "./components/AboutPage";
import { useState } from "react";

export default function App() {
  const [currA, updateCurrA] = useState(12);
  const [currB, updateCurrB] = useState(0);
  const [currC, updateCurrC] = useState(0);
  const [playerData, updatePlayerData] = useState([
    // {
    //   itemId: 0,
    //   itemName: "$",
    //   itemType: "currency",
    //   quantityOwned: 0,
    // },
    // {
    //   itemId: 1,
    //   itemName: "&",
    //   itemType: "currency",
    //   quantityOwned: 0,
    // },
    // {
    //   itemId: 2,
    //   itemName: "*",
    //   itemType: "currency",
    //   quantityOwned: 0,
    // },
    {
      itemId: 3,
      itemName: "Greater Flamingo",
      itemType: "flamingo",
      quantityOwned: 0,
    },
    {
      itemId: 4,
      itemName: "Lesser Flamingo",
      itemType: "flamingo",
      quantityOwned: 0,
    },
    {
      itemId: 5,
      itemName: "Andean Flamingo",
      itemType: "flamingo",
      quantityOwned: 0,
    },
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/play"
          element={
            <GamePage
              playerData={playerData}
              updatePlayerData={updatePlayerData}
              currA={currA}
              currB={currB}
              currC={currC}
              updateCurrA={updateCurrA}
              updateCurrB={updateCurrB}
              updateCurrC={updateCurrC}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const PageWrapper = styled.div`
  size: 100;
`;
