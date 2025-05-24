import React from "react";
import styled from "styled-components";

export default function HelpPage({ updateCurrentPage }) {
  //Back Button
  function onBackClick(e) {
    updateCurrentPage("main");
  }
  return (
    <PageWrapper>
      <h1>Help</h1>
      <section className="help-section">
        <h2>General Gameplay</h2>
        <p>
          The goal of this game is to build up your flamingo army by putting
          your flamingos to work to earn money to aquire even more flamingos!
        </p>
        <h3>Flamingos need to eat!</h3>
        <p>
          You must have enough fish to feed all your flamingos in order to put
          them to work. If you don't have enough fish (2 fish per flamingo to be
          exact), head over to the pond to go fishing! Or, grab yourself some
          Andean flamingos and send them to fish for you.
        </p>
        <h3>Hiring flamingos isn't free</h3>
        <p>
          To hire more flamingos, take a look at the shop. The price to hire
          each different species is listed. If you don't have enough funds, put
          your current flamingos to work and they'll be sure to bring you back
          some income!
        </p>
      </section>
      <section className="help-section">
        <h2>Fishing</h2>
        <p>
          If you want to feed your army, you've got a few options to aquire
          fish.
        </p>
        <h3>The Pond</h3>
        <p>
          Head over to the pond to reel in some fish! Catching fish is easy-
          just click on a fish when it pops up and it'll be added to your bag.
        </p>
        <h3>Andean Flamingos</h3>
        <p>
          If you've decided you're too lazy to fish for yourself, just save up
          some cash to hire a few Andean flamingos. Each Andean flamingo has a
          chance of bringing in some fish each time they work. But watch out,
          sometimes they get a little hungry and don't come back with anything!
        </p>
      </section>

      <button className="mainButton" onClick={(e) => onBackClick(e)}>
        Back
      </button>
      <div className="default-bottom" />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  top: 0;
  height: 100%;
  position: sticky;
  display: flex;
  flex-direction: column;
  padding: 50px;
  button {
    max-width: 10%;
    margin-bottom: 60px;
  }
  .help-section {
    border: 3px solid black;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 30px;
  }
`;
