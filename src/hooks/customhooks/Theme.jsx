import useLocalStorage from "./useLocalStorage";

const Theme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <div>
      <h1>Theme Example</h1>

      <h2>Current Theme: {theme}</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Theme;