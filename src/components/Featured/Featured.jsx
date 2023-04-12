import { useState, useEffect } from "react";
import axios from "axios";
import { expandBtn } from "./featured.module.css";

import GameBox from "../GameBox/GameBox";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { Grid } from "@mui/material";

const Featured = ({ title, query, route }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {

    async function fetchFeaturedGames() {
      const options = {
        method: 'GET',
        url: `https://free-to-play-games-database.p.rapidapi.com/api/games?${query}`,
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key': 'fc8df558bbmsh507f688c01b17f7p1ad9a2jsn1bc906e5a887'
        }
      };

      if (query) {
        await axios
          .request(options)
          .then((res) => setGames(res.data))
          .catch((err) => console.log(err));
      }
    }

    fetchFeaturedGames();
  }, [query]);

  return (
    <Grid container padding={3} flexDirection="column"> 
      <SectionTitle title={title} />
      {games.length > 0 ? (
        <Grid item container spacing={3}>
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
        </Grid>
      ) : (
        <Loader type="Oval" color="var(--accent)" height={32} width={32} />
      )}

      <Link to={route} className={`${expandBtn} ms-auto mt-3 text-light px-3`}>
        Show all
      </Link>
    </Grid>
  );
};

export default Featured;
