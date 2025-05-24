import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Shop from "./Shop";
import { shopData } from "../data/shopData";
import Fishing from "./Fishing";
import HelpPage from "./HelpPage";
import { Link } from "react-router-dom";

export default function GamePage({
  playerData,
  updatePlayerData,
  currA,
  currB,
  currC,
  updateCurrA,
  updateCurrB,
  updateCurrC,
}) {
  const [currentPage, updateCurrentPage] = useState("main");
  const [fishOwned, setFishOwned] = useState(0);
  const [feedingErrorMessage, setFeedingErrorMessage] = useState("");
  useEffect(() => {}, [playerData, currA, currB, currC, fishOwned]);

  //BUTTON CLICK FUNCTION
  function onWorkButtonClick(e) {
    e.preventDefault();

    //check that player has enough fish to feed the army
    let flamingoCounter = 0;
    playerData.map((item) => {
      flamingoCounter += item.quantityOwned;
    });
    //If player can't feed army
    if (fishOwned < flamingoCounter * 2) {
      //display error message
      let fishNeeded = flamingoCounter * 2 - fishOwned;
      setFeedingErrorMessage(
        `Your army needs more food than that! (Need
          ${fishNeeded} more fish)`
      );
      return;
    } else {
      //variables to hold the updated total funds
      let newA = currA;
      let newB = currB;
      let newC = currC;

      //computing updated funds for working
      playerData.map((item) => {
        shopData.map((shopItem) => {
          //if this owned item matches the shop item
          if (item.itemId === shopItem.itemId) {
            let ran = 0;
            //Computes the random chance of extra loot per flamingo owned
            for (let i = 0; i < item.quantityOwned; i++) {
              ran = Math.floor(Math.random() * 100);
              newA += ran <= shopItem.rLootAChance ? shopItem.rLootAAmount : 0;
            }
            newA += shopItem.gLootA * item.quantityOwned;
            //Computes currency B
            for (let i = 0; i < item.quantityOwned; i++) {
              ran = Math.floor(Math.random() * 100);
              newB += ran <= shopItem.rLootBChance ? shopItem.rLootBAmount : 0;
            }
            newB += shopItem.gLootB * item.quantityOwned;
            //Computes Currency C
            for (let i = 0; i < item.quantityOwned; i++) {
              ran = Math.floor(Math.random() * 100);
              newC += ran <= shopItem.rLootCChance ? shopItem.rLootCAmount : 0;
            }
            newC += shopItem.gLootC * item.quantityOwned;
          }
        });
      });
      //updating funds and fish amount
      setFeedingErrorMessage("");
      setFishOwned(fishOwned - flamingoCounter * 2);
      updateCurrA(newA);
      updateCurrB(newB);
      updateCurrC(newC);
    }
  }

  //FISHING BUTTON
  function onFishingClick(e) {
    updateCurrentPage("fishing");
  }

  //HELP BUTTON
  function onHelpClick(e) {
    updateCurrentPage("help");
  }

  return (
    <PageWrapper>
      {currentPage === "fishing" && (
        <Fishing
          updateCurrentPage={updateCurrentPage}
          setFishOwned={setFishOwned}
        />
      )}
      {currentPage === "help" && (
        <HelpPage updateCurrentPage={updateCurrentPage} />
      )}
      {currentPage === "main" && (
        <div>
          <div className="inventory-and-shop">
            <div className="inventory">
              <h2>Funds</h2>
              <div className="funds">
                <div className="fund">${currA}</div>
                <div className="fund">&{currB}</div>
                <div className="fund">*{currC}</div>
                <div className="fund">Fish: {fishOwned}</div>
              </div>
              <h2>Flamingos</h2>
              <div className="inventory-items">
                {playerData.map((item) => {
                  // if (item.itemType === "currency") {
                  //   return (
                  //     <div>
                  //       {item.itemName}
                  //       {item.quantityOwned}
                  //     </div>
                  //   );
                  // }
                  return (
                    <div className="inventory-item">
                      <div>{item.itemName}</div>
                      <div>Owned: {item.quantityOwned}</div>
                      <div>Cost To Work: {item.quantityOwned}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <Shop
                className="shop"
                playerData={playerData}
                updatePlayerData={updatePlayerData}
                currA={currA}
                currB={currB}
                currC={currC}
                updateCurrA={updateCurrA}
                updateCurrB={updateCurrB}
                updateCurrC={updateCurrC}
              />
            </div>
          </div>
          <div>{feedingErrorMessage}</div>
          <div className="options">
            <button
              className="mainButton"
              onClick={(e) => {
                onWorkButtonClick(e);
              }}
            >
              Work!
            </button>
            <button
              className="mainButton"
              onClick={(e) => {
                onFishingClick(e);
              }}
            >
              Pond
            </button>
            <button
              className="mainButton"
              onClick={(e) => {
                onHelpClick(e);
              }}
            >
              Help
            </button>
            <button className="mainButton">
              <Link className="link-to-button" to="/">
                Home
              </Link>
            </button>
          </div>
        </div>
      )}
      <div className="default-bottom" />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  top: 0;
  margin-top: 10px;
  height: 100%;
  padding: 20px;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .funds {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 30px;
    width: 50%;
    border: 3px solid black;
    border-radius: 3px;
    padding: 5px;
  }
  .inventory {
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-grow: 2;
    padding: 10px;
    margin-right: 20px;
  }
  .inventory-items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .inventory-item {
    display: flex;
    flex-direction: column;
    border: 3px solid var(--siteColorThree);
    border-radius: 3px;
    padding: 5px;
    margin: 10px;
  }
  .shop {
    padding: 10px;
    display: flex;
    flex-grow: 1;
  }
  .inventory-and-shop {
    display: flex;
    flex-direction: row;
  }
`;
