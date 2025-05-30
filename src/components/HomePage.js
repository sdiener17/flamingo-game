import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <PageWrapper>
      {/* <button className="mainButton" disabled>
        Load Save Data
      </button> */}
      <Link className="link-to-button" to="/play">
        <button className="mainButton">New Game</button>
      </Link>
      <Link className="link-to-button" to="/about">
        <button className="mainButton">About</button>
      </Link>
      {/* <button className="mainButton">
        <Link className="link-to-button" to="/help">
          Help
        </Link>
      </button> */}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  top: 0;
  height: 100%;
  padding: 20px;
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
