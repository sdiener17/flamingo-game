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
      <p className="purchase-message">{purchaseState}</p>
      <div>
        <div className="shop-flamingos">
          {shopData.map((item) => {
            return (
              <div>
                {item.itemName} | ${item.currencyA}, &{item.currencyB}, *
                {item.currencyC}{" "}
                <button
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
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
`;
