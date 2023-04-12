import { gameBox } from "./gameBox.module.css";
import { Grid, Link, Box } from "@mui/material";

const GameBox = ({ title, thumbnail, url }) => {
  return (
    <Grid item xs={6} md={3} lg={3} xl={2}>
      <Link href={url} target="_blank" rel="noreferrer">
        <Box
          className={`${gameBox}`}
          sx={{
            background: `url(${thumbnail})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </Link>
    </Grid>
  );
};

export default GameBox;
