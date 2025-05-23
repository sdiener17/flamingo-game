import React, { useEffect } from "react";
import styled from "styled-components";
import Shop from "./Shop";

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
  useEffect(() => {}, [playerData]);
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
        <button>CLICK</button>
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
