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
                  title="Browser games"
                  query="platform=browser"
                  route="/platform=browser"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="Recent games"
                  query="sort-by=release-date"
                  route="/sort-by=release-date"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="Shooters"
                  query="category=shooter"
                  route="/category=shooter"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="MMORPGs"
                  query="category=mmorpg"
                  route="/category=mmorpg"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="Low spec"
                  query="category=low-spec"
                  route="/category=low-spec"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="2D games"
                  query="category=2d"
                  route="/category=2d"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="3D games"
                  query="category=3d"
                  route="/category=3d"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="Fighting games"
                  query="category=fighting"
                  route="/category=fighting"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="Card games"
                  query="category=card"
                  route="/category=card"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="MOBAs"
                  query="category=moba&sort-by=popularity"
                  route="/category=moba&sort-by=popularity"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="Horror games"
                  query="category=horror"
                  route="/category=horror"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="Turn-based combat"
                  query="category=turn-based"
                  route="/category=turn-based"
                />
                </Suspense>
                <Suspense fallback={<p>Loading</p>}>
                <Featured
                  title="Sport games"
                  query="category=sports"
                  route="/category=sports"
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
