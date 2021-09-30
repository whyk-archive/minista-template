import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Container: React.VFC<Props> = (
  { children },
) => (
  <div className="container">
    {children}
  </div>
);
