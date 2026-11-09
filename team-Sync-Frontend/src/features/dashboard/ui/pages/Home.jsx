import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../state/themeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard Home</h1>
      <p>Current theme: <span className="font-semibold uppercase">{mode}</span></p>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 rounded-lg font-medium transition cursor-pointer border border-[var(--border-color)] bg-(--bg-card) hover:bg-[var(--bg-hover)] text-[var(--text-primary)]"
      >
        Toggle Theme ({mode === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"})
      </button>
    </div>
  );
};

export default Home;
