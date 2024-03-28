import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RouteManager = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const navigateTo = (path: string) => {
      navigate(path);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.navigateTo = navigateTo;
  }, []);
  return <></>;
};
