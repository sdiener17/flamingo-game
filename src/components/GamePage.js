import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Shop from "./Shop";
import { shopData } from "../data/shopData";
import Fishing from "./Fishing";

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
  useEffect(() => {}, [playerData, currA, currB, currC, fishOwned]);

  //BUTTON CLICK FUNCTION
  function onMainButtonClick(e) {
    let newA = currA;
    let newB = currB;
    let newC = currC;
    playerData.map((item) => {
      console.log("NEWA " + newA);
      shopData.map((shopItem) => {
        //if this owned item matches the shop item
        if (item.itemId === shopItem.itemId) {
          let ran = 0;
          //Computes the random chance of extra loot per flamingo owned
          for (let i = 0; i < item.quantityOwned; i++) {
            ran = Math.floor(Math.random() * 100);
            newA += ran <= shopItem.rLootAChance ? shopItem.rLootAAmount : 0;
            console.log("In loop: " + ran + ", " + newA);
          }
          newA += shopItem.gLootA * item.quantityOwned;
          //Computes currency B
          for (let i = 0; i < item.quantityOwned; i++) {
            ran = Math.floor(Math.random() * 100);
            newB += ran <= shopItem.rLootBChance ? shopItem.rLootBAmount : 0;
            console.log("In loop: " + ran + ", " + newB);
          }
          newB += shopItem.gLootB * item.quantityOwned;
          //Computes Currency C
          for (let i = 0; i < item.quantityOwned; i++) {
            ran = Math.floor(Math.random() * 100);
            newC += ran <= shopItem.rLootCChance ? shopItem.rLootCAmount : 0;
            console.log("In loop: " + ran + ", " + newC);
          }
          newC += shopItem.gLootC * item.quantityOwned;
        }
      });
    });
    updateCurrA(newA);
    updateCurrB(newB);
    updateCurrC(newC);
  }

  //FISHING BUTTON
  function onFishingClick(e) {
    updateCurrentPage("fishing");
  }

  return (
    <PageWrapper>
      {currentPage === "fishing" && (
        <Fishing
          updateCurrentPage={updateCurrentPage}
          setFishOwned={setFishOwned}
        />
      )}
      {currentPage === "main" && (
        <div>
          <div className="inventory-and-shop">
            <div className="inventory">
              <h2>Funds: </h2>
              <div className="funds">
                <div className="fund">${currA}</div>
                <div className="fund">&{currB}</div>
                <div className="fund">*{currC}</div>
                <div className="fund">Fish: {fishOwned}</div>
              </div>
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
                    {item.itemName} | {item.quantityOwned}
                  </div>
                );
              })}
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

          <div className="options">
            <button
              className="mainButton"
              onClick={(e) => {
                onMainButtonClick(e);
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
              Go fishing
            </button>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  top: 0;
  height: 100%;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .funds {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: 3px solid black;
    border-radius: 3px;
    padding: 5px;
  }
  .inventory {
    padding: 10px;
    margin-right: 20px;
  }
  .inventory-item {
    margin: 10px;
  }
  .shop {
    padding: 10px;
  }
  .inventory-and-shop {
    display: flex;
    flex-direction: row;
  }
`;
