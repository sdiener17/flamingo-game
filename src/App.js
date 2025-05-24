import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import AboutPage from "./components/AboutPage";
import { useState } from "react";

export default function App() {
  const [currA, updateCurrA] = useState(0);
  const [currB, updateCurrB] = useState(0);
  const [currC, updateCurrC] = useState(0);
  const [playerData, updatePlayerData] = useState([
    {
      itemId: 0,
      itemName: "Greater Flamingo",
      itemType: "flamingo",
      quantityOwned: 1,
    },
    {
      itemId: 1,
      itemName: "Carribbean Flamingo",
      itemType: "flamingo",
      quantityOwned: 0,
    },
    {
      itemId: 2,
      itemName: "Lesser Flamingo",
      itemType: "flamingo",
      quantityOwned: 0,
    },
    {
      itemId: 3,
      itemName: "Andean Flamingo",
      itemType: "flamingo",
      quantityOwned: 0,
    },
    {
      itemId: 4,
      itemName: "Chilean Flamingo",
      itemType: "flamingo",
      quantityOwned: 0,
    },
    {
      itemId: 5,
      itemName: "Puna Flamingo",
      itemType: "flamingo",
      quantityOwned: 0,
    },
  ]);
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 100vh;
  /* padding-bottom: 100px; */
`;
