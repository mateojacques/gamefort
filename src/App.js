import "./App.css";
import { useState, lazy, Suspense } from "react";
import { Sidebar, Hero, Footer } from "./components";
import { CategoryGames, GameLauncher } from "./views";
import { Routes, Route } from "react-router-dom";

const Featured = lazy(() => import("./components/Featured/Featured"));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    menuOpen === false ? setMenuOpen(true) : setMenuOpen(false);
  }

  return (
    <div className="App">
      <button className="openMenuBtn" onClick={handleToggleMenu}>
        <i className="bi-gear-fill"></i>
      </button>
      <Sidebar menuOpen={menuOpen} />

      <section id="main" className="w-100 d-flex flex-column">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Hero />
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="Featured"
                  query="sort-by=relevance"
                  route="/sort-by=relevance"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="Recent games"
                  query="sort-by=release-date"
                  route="/sort-by=release-date"
                />
                </Suspense>
              </>
            }
          />

          <Route exact path="/:category" element={<CategoryGames />} />

          <Route exact path="/launcher" element={<GameLauncher />} />
        </Routes>
        <Footer />
      </section>
    </div>
  );
}

export default App;
