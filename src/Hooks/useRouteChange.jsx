import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useRouteChange = (onRouteChange) => {
  const location = useLocation();

  useEffect(() => {
    onRouteChange(location.pathname);
  }, [location.pathname, onRouteChange]);
};

export default useRouteChange;
