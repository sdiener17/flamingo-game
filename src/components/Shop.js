import React, { useState } from "react";
import styled from "styled-components";
import { shopData } from "../data/shopData";

export default function Shop({
  playerData,
  updatePlayerData,
  currA,
  currB,
  currC,
  updateCurrA,
  updateCurrB,
  updateCurrC,
}) {
  const [purchaseState, updatePurchaseState] = useState("");

  //Purchasing item function
  function itemBuyClick(itemBoughtId, currAPrice, currBPrice, currCPrice) {
    const newPlayerData = playerData.map((item) => {
      if (item.itemId === itemBoughtId) {
        console.log("!!!!!" + currA + ", " + currAPrice);
        if (currA >= currAPrice && currB >= currBPrice && currC >= currCPrice) {
          updateCurrA(currA - currAPrice);
          updateCurrB(currB - currBPrice);
          updateCurrC(currC - currCPrice);
          updatePurchaseState("Purchased!");
          return {
            itemId: item.itemId,
            itemName: item.itemName,
            quantityOwned: item.quantityOwned + 1,
          };
        } else {
          updatePurchaseState("Insufficient Funds!!!");
          return item;
        }
      } else {
        return item;
      }
    });
    updatePlayerData(newPlayerData);
  }

  return (
    <PageWrapper>
      <h2>Shop</h2>
      <div>
        <div className="shop-flamingos">
          {shopData.map((item) => {
            return (
              <div>
                <div className="shop-item">
                  <div>{item.itemName} | </div>
                  <div>${item.currencyA}, </div>
                  <div>&{item.currencyB}, </div>
                  <div>*{item.currencyC} </div>
                  <button
                    className="buy-button"
                    onClick={(e) =>
                      itemBuyClick(
                        item.itemId,
                        item.currencyA,
                        item.currencyB,
                        item.currencyC
                      )
                    }
                  >
                    Buy
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="purchase-message">{purchaseState}</p>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .shop-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .buy-button {
    border-radius: 3px;
    background-color: var(--buttonOne);
    padding: 5px;
    margin: 5px;
  }
  .buy-button:hover {
    background-color: var(--buttonOneHover);
  }
`;
