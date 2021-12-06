import { gamesContainer } from "./categoryGames.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import GameBox from "../../components/GameBox/GameBox";
import Loader from "react-loader-spinner";

const CategoryGames = () => {
  const { category } = useParams();
  const [categoryTag, setCategoryTag] = useState("");
  const [games, setGames] = useState([]);

  useEffect(() => {
    function handleCategoryTag() {
      if (category) {
        switch (category) {
          case "sort-by=relevance":
            setCategoryTag("All games");
            break;
          case "platform=browser":
            setCategoryTag("Browser games");
            break;
          case "sort-by=release-date":
            setCategoryTag("Recent games");
            break;
          case "category=shooter":
            setCategoryTag("Shooters");
            break;
          case "category=mmorpg":
            setCategoryTag("MMORPGs");
            break;
          case "category=low-spec":
            setCategoryTag("Low spec");
            break;
          case "category=2d":
            setCategoryTag("2D");
            break;
          case "category=3d":
            setCategoryTag("3D");
            break;
          case "category=fighting":
            setCategoryTag("Fighting games");
            break;
          case "category=card":
            setCategoryTag("Card games");
            break;
          case "category=moba&sort-by=popularity":
            setCategoryTag("MOBAs");
            break;
          case "category=horror":
            setCategoryTag("Horror games");
            break;
          case "category=turn-based":
            setCategoryTag("Turn-based combat");
            break;
          case "category=sports":
            setCategoryTag("Sports games");
            break;
          default:
            setCategoryTag("");
        }
      }
    }

    async function fetchGames() {
      if (category) {
        await axios
          .post(`https://www.freetogame.com/api/games?${category}`)
          .then((res) => setGames(res.data))
          .catch((err) => console.log(err));
      }
    }

    handleCategoryTag();
    fetchGames();
  }, [category]);

  return (
    <section className="w-100 d-flex flex-column px-3 py-3">
      <SectionTitle title={categoryTag} />

      {games.length > 0 ? (
        <div className={`${gamesContainer} d-flex flex-wrap`}>
          {games.length > 0
            ? games.map((game, index) => (
                <GameBox
                  key={game.id}
                  title={game.title}
                  thumbnail={game.thumbnail}
                  url={game.game_url}
                />
              ))
            : ""}
        </div>
      ) : (
        <Loader type="Oval" color="var(--accent)" height={32} width={32} />
      )}
    </section>
  );
};

export default CategoryGames;
