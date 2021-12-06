import "./App.css";
import { useState } from "react";
import { Sidebar, Hero, Featured, Footer } from "./components";
import {CategoryGames, GameLauncher} from "./views"
import { Routes, Route } from "react-router-dom";

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
          <Route exact path="/" element={<>
            <Hero />
            <Featured title="Featured" query="sort-by=relevance" route="/sort-by=relevance" />
            <Featured
              title="Browser games"
              query="platform=browser"
              route="/platform=browser"
            />
            <Featured
              title="Recent games"
              query="sort-by=release-date"
              route="/sort-by=release-date"
            />
            <Featured
              title="Shooters"
              query="category=shooter"
              route="/category=shooter"
            />
            <Featured title="MMORPGs" query="category=mmorpg" route="/category=mmorpg" />
            <Featured
              title="Low spec"
              query="category=low-spec"
              route="/category=low-spec"
            />
            <Featured title="2D games" query="category=2d" route="/category=2d" />
            <Featured title="3D games" query="category=3d" route="/category=3d" />
            <Featured
              title="Fighting games"
              query="category=fighting"
              route="/category=fighting"
            />
            <Featured title="Card games" query="category=card" route="/category=card" />
            <Featured
              title="MOBAs"
              query="category=moba&sort-by=popularity"
              route="/category=moba&sort-by=popularity"
            />
            <Featured
              title="Horror games"
              query="category=horror"
              route="/category=horror"
            />
            <Featured
              title="Turn-based combat"
              query="category=turn-based"
              route="/category=turn-based"
            />
            <Featured
              title="Sport games"
              query="category=sports"
              route="/category=sports"
            />
            </>}/>
            

          <Route exact path="/:category" element={<CategoryGames/>}/>

          <Route exact path="/launcher" element={<GameLauncher/>}/>
        </Routes>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
