import { useState, useEffect } from "react";
import axios from "axios";
import { expandBtn, gamesContainer } from "./featured.module.css";

import GameBox from "../GameBox/GameBox";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

const Featured = ({ title, query, route }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {

    async function fetchFeaturedGames() {
      await axios
        .post(`https://www.freetogame.com/api/games?${query}`)
        .then((res) => setGames(res.data))
        .catch((err) => console.log(err));
    }

    fetchFeaturedGames();
  }, [query]);

  return (
    <section className="w-100 d-flex flex-column px-3 py-3">
      <SectionTitle title={title} />
      {games.length > 0 ? (
        <div className={`${gamesContainer} w-100 d-flex`}>
          {games.length > 0
            ? games.map((game, index) => {
                if (index < 10) {
                  return (
                    <GameBox
                      key={game.id}
                      title={game.title}
                      thumbnail={game.thumbnail}
                      url={game.game_url}
                    />
                  );
                } else return null;
              })
            : ""}
        </div>
      ) : (
        <Loader type="Oval" color="var(--accent)" height={32} width={32} />
      )}

      <Link to={route} className={`${expandBtn} ms-auto mt-3 text-light px-3`}>
        Show all
      </Link>
    </section>
  );
};

export default Featured;
