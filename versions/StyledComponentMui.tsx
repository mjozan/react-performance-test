import React from "react";
import style from "../styleObject";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(style);

const Component = function ({ children }) {
  return <StyledBox>{children}</StyledBox>;
};

export default function () {
  return (
    <>
      <div>Styled component</div>
      {Array(3000)
        .fill(0)
        .map((_, i) => (
          <Component key={i}>test</Component>
        ))}
    </>
  );
}
