import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <PageWrapper>
      <button>Load Save Data</button>
      <Link to="/play">New Game</Link>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
`;
