import axios from "axios";
import { useState, useEffect, Suspense, lazy } from "react";
import { useParams } from "react-router";
import { Grid } from "@mui/material";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Loader from "react-loader-spinner";

const GameBox = lazy(() => import("../../components/GameBox/GameBox"));

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
      const options = {
        method: 'GET',
        url: `https://free-to-play-games-database.p.rapidapi.com/api/games?${category}`,
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key': 'fc8df558bbmsh507f688c01b17f7p1ad9a2jsn1bc906e5a887'
        }
      };

      if (category) {
        await axios
          .request(options)
          .then((res) => setGames(res.data))
          .catch((err) => console.log(err));
      }
    }

    handleCategoryTag();
    fetchGames();
  }, [category]);

  return (
    <Grid container padding={3} flexDirection="column">
      <SectionTitle title={categoryTag} />

      {games.length > 0 ? (
        <Grid item container spacing={3}>
          {games.length > 0
            && games.map((game, index) => (
                <Suspense fallback={<p>Loading</p>} key={game.id}>
                  <GameBox
                    title={game.title}
                    thumbnail={game.thumbnail}
                    url={game.game_url}
                  />
                </Suspense>
              ))
            }
        </Grid>
      ) : (
        <Loader type="Oval" color="var(--accent)" height={32} width={32} />
      )}
    </Grid>
  );
};

export default CategoryGames;
