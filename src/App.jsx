import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import { SearchProvider } from "./Components/SearchContext";

function App() {
  return (
    <div className="text-white">
      <SearchProvider>
        <NavBar />
        <Hero />
      </SearchProvider>
    </div>
  );
}

export default App;
