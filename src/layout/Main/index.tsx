import React, { useMemo } from "react";

import { useRouter } from "next/router";

import getRoute from "~/routes/getRoute";

import { MainContent } from "./styles";

interface MainProps {
  children?: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  const { asPath: currentPath } = useRouter();

  const currentRoute = useMemo(() => getRoute(currentPath), [currentPath]);

  return <MainContent>{children}</MainContent>;
};
