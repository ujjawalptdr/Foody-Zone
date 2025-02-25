import "./App.css";
import NavBar from "./Components/navBar";
import Hero from "./Components/Hero";
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
