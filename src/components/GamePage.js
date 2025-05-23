import React, { useEffect } from "react";
import styled from "styled-components";
import Shop from "./Shop";
import { shopData } from "../data/shopData";

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
  useEffect(() => {}, [playerData, currA, currB, currC]);

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

  return (
    <PageWrapper>
      <div className="inventory-and-shop">
        <div className="inventory">
          You Have ${currA}, &{currB}, *{currC}
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
              <div>
                {item.itemName} | {item.quantityOwned}
              </div>
            );
          })}
        </div>
        <div>
          <Shop
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

      <div>
        <button
          onClick={(e) => {
            onMainButtonClick(e);
          }}
        >
          CLICK
        </button>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .inventory-and-shop {
    display: flex;
    flex-direction: row;
  }
`;
