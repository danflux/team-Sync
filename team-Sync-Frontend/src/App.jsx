import { useEffect } from "react";
import { useSelector } from "react-redux";
import AppRoute from "./app/routes/AppRoute";

const App = () => {
  const { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }, [mode]);

  return <AppRoute />;
};

export default App;
