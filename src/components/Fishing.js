import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FishingPond from "./FishingPond";

export default function Fishing({ updateCurrentPage, setFishOwned }) {
  const [fishCaught, setFishCaught] = useState(0);

  //Back Button
  function onBackClick(e) {
    //add fish caught to total fish owned
    setFishOwned((prevFishOwned) => prevFishOwned + fishCaught);
    updateCurrentPage("main");
  }

  return (
    <PageWrapper>
      <h1>Click the fish to catch them!</h1>
      <p>Fish caught: {fishCaught}</p>
      <div className="pond">
        <FishingPond fishCaught={fishCaught} setFishCaught={setFishCaught} />
      </div>

      <button
        className="mainButton back-button"
        onClick={(e) => {
          onBackClick(e);
        }}
      >
        Back
      </button>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 15px;
  h1 {
    font-size: 1rem;
  }
  .pond {
    display: flex;
    height: 60%;
    width: 80%;
    margin: 10px;
    position: relative;
    /* border: 5px solid black; */
    /* padding: 10px; */
    /* background-color: var(--siteColorTwo); */
  }
  .fish-button {
    background-color: rgb(201, 182, 106);
  }
  .back-button {
    width: 20%;
    margin: 10px;
  }
`;
