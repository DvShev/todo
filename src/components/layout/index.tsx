import React, { FC, ReactElement } from "react";
import styled from "styled-components";

const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  align-items: center;
  height: 100vh;
`;

export const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return <LayoutWrap>{children}</LayoutWrap>;
};
