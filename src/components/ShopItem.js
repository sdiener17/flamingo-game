import React from "react";
import styled from "styled-components";

export default function ShopItem({ itemName, itemCurrency, itemPrice }) {
  return <PageWrapper>{itemName}</PageWrapper>;
}

const PageWrapper = styled.div`
  display: flex;
`;
