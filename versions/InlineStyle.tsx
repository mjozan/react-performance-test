import React from "react";
import style from "../styleObject";
import Box from "@mui/material/Box";

const Component = function ({ children }) {
  return <Box style={style}>{children}</Box>;
};

export default function () {
  return (
    <>
      <div>Inline styles</div>
      {Array(3000)
        .fill(0)
        .map((_, i) => (
          <Component key={i}>test</Component>
        ))}
    </>
  );
}
