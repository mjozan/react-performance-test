import React from "react";
import style from "../styleObject";
import Box from "@mui/material/Box";
import { styled } from "styled-components";
import styleToCss from "style-object-to-css-string";

const StyledBox = styled(Box)`
  ${styleToCss(style)}
`;

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
