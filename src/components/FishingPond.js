import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function FishingPond({ setFishCaught }) {
  const [fish, setFish] = useState([]);

  useEffect(() => {
    // let randomFishInterval = Math.floor(Math.random() * (5000 - 1500)) + 1500;
    let randomFishInterval = 1000;

    //Creates interval at which to make new fish
    const intervalId = setInterval(generateButton, randomFishInterval); // New button every 1.5 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  //#######
  //creates the fish
  //Note- I would like to make the fish appearing and disappearing intervals a little bit random
  const generateButton = () => {
    //Gets the size of the pond
    const container = document.querySelector(".pond");
    // const fishButton = document.querySelector(".fish-button");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    // const fishWidth = fishButton.offsetWidth;
    // const fishHeight = fishButton.offsetHeight;
    const fishWidth = 45;
    const fishHeight = 35;
    const newFish = {
      id: Date.now(),
      x: Math.floor(Math.random() * containerWidth - fishWidth), // position inside the container width, accounting for fish size
      y: Math.floor(Math.random() * containerHeight - fishHeight), // position inside the container height
      visible: true,
    };
    setFish((prevfish) => [...prevfish, newFish]);

    setTimeout(() => {
      setFish((prevfish) =>
        prevfish.map((button) =>
          button.id === newFish.id ? { ...button, visible: false } : button
        )
      );
    }, 1500); // Button disappears after 1.5 seconds
    // randomFishInterval = Math.floor(Math.random() * (5000 - 1500)) + 1500;
    // console.log(randomFishInterval);
  };

  //Fish clicked
  const handleFishClick = (id) => {
    setFish((prevfish) =>
      prevfish.map((button) =>
        button.id === id ? { ...button, visible: false } : button
      )
    );
    setFishCaught((prevScore) => prevScore + 1);
  };

  return (
    <PageWrapper>
      {fish.map(
        (button) =>
          button.visible && (
            <button
              className="fish-button"
              key={button.id}
              onClick={() => handleFishClick(button.id)}
              style={{
                position: "absolute",
                left: `${button.x}px`,
                top: `${button.y}px`,
              }}
            >
              Fish
            </button>
          )
      )}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: var(--siteColorTwo);
  border: 5px solid rgb(69, 62, 54);
  border-radius: 5px;
  height: 100%;
  width: 100%;
  .fish-button {
    background-color: rgb(201, 182, 106);
  }
`;
