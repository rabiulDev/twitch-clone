import React from "react";
import { Wrapper } from "./wrapper";
import { Toggle } from "./toggle";

type Props = {};

export const Sidebar = (props: Props) => {
  return (
    <Wrapper>
      <Toggle />
    </Wrapper>
  );
};
