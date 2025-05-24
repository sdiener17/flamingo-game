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
  const [shopState, setShopState] = useState("shop");

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

  //INFO CLICK
  function onInfoClick(e) {
    setShopState("info");
  }

  //SHOP CLICK
  function onShopClick(e) {
    setShopState("shop");
  }

  return (
    <PageWrapper>
      <h2>Shop</h2>
      {shopState === "info" && (
        <div className="info-section">
          <button
            className="info-button"
            onClick={(e) => {
              onShopClick();
            }}
          >
            Shop
          </button>
          <ul className="flamingos-list">
            <li>
              <b>Greater Flamingo:</b> The greater flamingo can be hired for
              pearls. They bring in 1 pearl each with a small chance of finding
              an extra pearl or gold.
            </li>
            <li>
              <b>Lesser Flamingo: </b>The lesser flamingo can be hired for
              pearls and gold. They may sometimes come back empty-handed after a
              day of work, but the salt flats where they work have bigger gold
              deposits hidden beneath and they have a chance of bringing home a
              larger load of gold.{" "}
            </li>
            <li>
              <b>Carribbean Flamingo: </b> Information I guess
            </li>
            <li>Andean Flamingo: Things about</li>
            <li>Chilean Flamingo: Things about</li>
            <li>Puna Flamingo: Things about</li>
          </ul>
        </div>
      )}
      {shopState === "shop" && (
        <div className="shop-flamingos">
          <button
            className="info-button"
            onClick={(e) => {
              onInfoClick();
            }}
          >
            Information
          </button>
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
      )}
      <p className="purchase-message">{purchaseState}</p>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
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
  .info-section {
    /* display: flex; */
    /* flex-direction: column; */
  }
  .info-button {
    background: none;
    border: none;
    padding: 0;
    color: var(--linkColor);
    text-decoration: underline;
    cursor: pointer;
  }
  li {
    margin-bottom: 5px;
  }
`;
