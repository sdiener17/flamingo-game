import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function AboutPage() {
  return (
    <PageWrapper>
      <h1>About</h1>
      <p>
        This is game. You try to get flamingos. It's a work in progress. Enjoy.
      </p>
      <Link className="link-to-button" to="/">
        <button className="mainButton">Back 2</button>
      </Link>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  button {
    max-width: 30%;
  }
  .link-b {
    width: 100%;
    height: 100%;
  }
`;
